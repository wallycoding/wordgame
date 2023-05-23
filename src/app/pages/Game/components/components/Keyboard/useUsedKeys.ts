import { useMemo } from "react";

const useUsedKeys = (secretWord: string, wordAttempts: string[]) =>
  useMemo(() => {
    const usedKeysMap = new Map<string, number>();
    wordAttempts.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        const char = word[i];
        if (char === secretWord[i]) usedKeysMap.set(char, 0);
        else if (secretWord.includes(char) && !usedKeysMap.has(char))
          usedKeysMap.set(char, 1);
        else if (!usedKeysMap.has(char)) usedKeysMap.set(char, 2);
      }
    });
    return usedKeysMap;
  }, [wordAttempts.join("")]);

export default useUsedKeys;
