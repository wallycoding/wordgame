import path from "node:path";
import { Transform, Writable } from "node:stream";
import { createReadStream } from "node:fs";

const filename = path.resolve(".", "src", "static", "words_pt_BR.txt");
export const createWordStream = () => {
  let rawVestige: string | null;
  const wordStream = createReadStream(filename, { encoding: "utf-8" });
  const fixWordsStream = new Transform({
    transform(chunk: Buffer, encoding, cb) {
      try {
        let rawContext = chunk.toString();
        if (rawVestige) {
          rawContext = rawVestige + rawContext;
          rawVestige = null;
        }
        const words = rawContext.split("\n");
        if (!rawContext.endsWith("\n"))
          rawVestige = words.splice(words.length - 1, 1)[0];
        cb(null, JSON.stringify(words));
      } catch (error) {
        cb(error as Error);
      }
    },
  });

  wordStream.once("close", () => wordStream.destroy());
  fixWordsStream.once("close", () => fixWordsStream.destroy());

  return wordStream.pipe(fixWordsStream);
};

export const randomWords = (loops: number = 500, width: number = 30) => {
  return new Promise<string[]>((resolve, reject) => {
    try {
      const allWords: string[] = [];
      const stream = createWordStream();
      const randomWordsStream = new Writable({
        write(chunk: Buffer, encoding, cb) {
          const words = JSON.parse(chunk.toString());
          for (let i = 0; i < loops; i++) {
            const index = Math.floor(
              Math.random() * (words.length - (1 + width))
            );
            const randomizedWords = words.slice(index, width);
            allWords.push(...randomizedWords);
          }
          cb(null);
        },
      });
      stream.pipe(randomWordsStream);
      stream.once("end", () => {
        const allWordsSet = new Set(allWords);
        const allWordsFiltered = Array.from(allWordsSet).sort(() =>
          Math.floor(Math.random() * 2) ? 1 : -1
        );
        resolve(allWordsFiltered);
      });
    } catch (error) {
      reject(error);
    }
  });
};
