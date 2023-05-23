import classNames from "classnames";
import CharBox from "./components/CharBox";
import createRng from "@/utils/createRng";

interface WordBoxProps {
  word?: string;
  secretWord?: string;
  size?: number;
}

const count = (data: string | string[], searchChar: string) =>
  (typeof data === "string" ? data.split("") : data).filter(
    (char) => char === searchChar
  ).length;

const WordBox = ({ size, ...props }: WordBoxProps) => {
  if (size)
    return (
      <div className="flex justify-center gap-3">
        {createRng(size).map((i) => (
          <CharBox
            key={i}
            className="relative w-full max-w-[3.5rem] cursor-pointer rounded-lg bg-midnight-600 text-3xl font-bold uppercase text-night-200 after:block after:pb-[100%] after:[content:'']"
          />
        ))}
      </div>
    );

  const { word, secretWord } = props;
  if (!word || !secretWord)
    throw Error("Set a size if not using properties: word, secretWord");

  return (
    <div className="flex justify-center gap-3">
      {word.split("").map((char, i) => {
        return (
          <CharBox
            key={i}
            char={char}
            className={classNames(
              "relative w-full max-w-[3.5rem] cursor-pointer rounded-lg text-3xl font-bold uppercase after:block after:pb-[100%] after:[content:'']",
              char === secretWord[i]
                ? "bg-green-300 text-night-300"
                : secretWord.includes(char) &&
                  count(word.slice(0, i), char) +
                    secretWord
                      .slice(i)
                      .split("")
                      .filter((secretChar, j) => {
                        const slicedWord = word.slice(i);
                        return (
                          secretChar === slicedWord[j] && char === secretChar
                        );
                      }).length <
                    count(secretWord, char)
                ? "bg-yellow-300 text-night-300"
                : "bg-midnight-600 text-night-200"
            )}
          />
        );
      })}
    </div>
  );
};

export default WordBox;
