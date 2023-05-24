"use client";
import { useState } from "react";
import WordBox from "./components/WordBox";
import Input from "./components/Input";
import useReferredState from "@/app/hooks/useReferredState";
import Keyboard from "./components/Keyboard";
import KeyboardProvider from "@/app/providers/KeyboardProvider";
import createRng from "@/utils/createRng";
import normalizeWord from "@/utils/nomalizeWord";
import { HiRefresh } from "react-icons/hi";
import Image from "next/image";
import icon from "@/assets/icons/icon.png";
import { useRouter } from "next/navigation";

interface GamepadProps {
  words: string[];
}

enum GameStatus {
  PLAYING = "PLAYING",
  WIN = "WIN",
  DEFEAT = "DEFEAT",
}

const MAX_WORD_ATTEMPTS = 6;

const Gamepad = ({ words }: GamepadProps) => {
  const router = useRouter();
  const [level, setLevel] = useState(0);
  const [status, setStatus] = useState<GameStatus>(GameStatus.PLAYING);
  const [wordAttempts, setWordAttempts, wordAttemptsRef] = useReferredState<
    string[]
  >([]);

  const secretWord = normalizeWord(words[level]);
  const emptyRows = createRng(
    MAX_WORD_ATTEMPTS -
      (status === GameStatus.PLAYING ? 1 : 0) -
      wordAttempts.length
  ) as number[];

  const onDone = (word: string) => {
    const wordAttempts = wordAttemptsRef.current;
    if (secretWord === word) setStatus(GameStatus.WIN);
    else if (wordAttempts.length === MAX_WORD_ATTEMPTS - 1)
      setStatus(GameStatus.DEFEAT);
    setWordAttempts([...wordAttempts, word]);
  };

  console.log(secretWord);

  return (
    <KeyboardProvider size={secretWord.length}>
      <div className="flex flex-1 flex-col justify-between gap-8">
        <div className="flex flex-col gap-3 px-6">
          <div className="mx-auto flex w-full items-center justify-between py-3 sm:fixed sm:left-0 sm:w-[100%] sm:px-10">
            <div className="h-12 w-12">
              <Image src={icon} alt="logo" className="h-full w-full" />
            </div>
            <button
              className="right-10 top-10 rounded-sm bg-night-300/40 p-3 text-lg text-white backdrop-blur-md"
              onClick={() => {
                if (level === words.length) return router.refresh();
                setLevel(level + 1);
                setWordAttempts([]);
                setStatus(GameStatus.PLAYING);
              }}
            >
              <HiRefresh />
            </button>
          </div>
          {wordAttempts.map((word, i) => {
            return <WordBox key={i} word={word} secretWord={secretWord} />;
          })}
          {GameStatus.PLAYING === status && <Input />}
          {emptyRows.map((i) => (
            <WordBox key={i} size={secretWord.length} />
          ))}
        </div>
        <Keyboard
          secretWord={secretWord}
          wordAttempts={wordAttempts}
          onDone={onDone}
        />
      </div>
    </KeyboardProvider>
  );
};

export default Gamepad;
