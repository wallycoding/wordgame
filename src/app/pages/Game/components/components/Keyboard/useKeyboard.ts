import { useKeyboardContext } from "@/app/providers/KeyboardProvider";
import createRng from "@/utils/createRng";
import { useEffect } from "react";
import useUsedKeys from "./useUsedKeys";

export interface KeyboardProps {
  wordAttempts: string[];
  secretWord: string;
  onDone(word: string): void;
}

export enum KeyType {
  CHAR = "CHAR",
  COMMAND = "COMMAND",
}

const useKeyboard = (props: KeyboardProps) => {
  const { wordAttempts, secretWord, onDone } = props;
  const { charsRef, setChars, indexRef, setIndex } = useKeyboardContext();

  const onKeyDownEvent = (type: KeyType, key: string) => {
    const chars = [...charsRef.current];
    const index = indexRef.current;
    const size = chars.length;

    if (type === KeyType.CHAR) {
      chars[index] = key;
      if (index < size - 1) setIndex(index + 1);
      return setChars(chars);
    }

    if (key === "Backspace") {
      if (chars[index]) chars[index] = "";
      else if (index > 0) {
        chars[index - 1] = "";
        setIndex(index - 1);
      }
      setChars(chars);
    } else if (key === "Enter" && size === chars.join("").length) {
      onDone(chars.join(""));
      setChars(createRng(size, "str"));
      setIndex(0);
    } else if (key === "ArrowLeft") setIndex(index ? index - 1 : size - 1);
    else if (key === "ArrowRight") setIndex((index + 1) % size);
  };

  useEffect(() => {
    const keydownEvent = (event: KeyboardEvent) => {
      const charRegex = /^[a-z]$/;
      const commandRegex = /^Backspace|ArrowLeft|ArrowRight|Enter$/;
      if (charRegex.test(event.key)) onKeyDownEvent(KeyType.CHAR, event.key);
      if (commandRegex.test(event.key))
        onKeyDownEvent(KeyType.COMMAND, event.key);
    };
    window.addEventListener("keydown", keydownEvent);
    return () => window.removeEventListener("keydown", keydownEvent);
  }, []);

  useEffect(() => {
    setChars(createRng(secretWord.length, "str"));
    setIndex(0);
  }, [secretWord]);

  const usedKeys = useUsedKeys(secretWord, wordAttempts);

  return { usedKeys, onKeyDownEvent };
};

export default useKeyboard;
