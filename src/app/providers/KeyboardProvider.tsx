import { MutableRefObject, ReactNode, createContext, useContext } from "react";
import useReferredState from "../hooks/useReferredState";
import createRng from "@/utils/createRng";

interface KeyboardContext {
  chars: string[];
  charsRef: MutableRefObject<string[]>;
  index: number;
  indexRef: MutableRefObject<number>;
  setChars(chars: string[]): void;
  setIndex(i: number): void;
}

interface KeyboardProviderProps {
  size: number;
  children: ReactNode;
}

const KeyboardContext = createContext<KeyboardContext | null>(null);

const KeyboardProvider = ({ children, size }: KeyboardProviderProps) => {
  const [chars, setChars, charsRef] = useReferredState<string[]>(
    createRng(size, "str")
  );
  const [index, setIndex, indexRef] = useReferredState(0);
  return (
    <KeyboardContext.Provider
      value={{
        chars,
        setChars,
        charsRef,
        index,
        setIndex,
        indexRef,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => {
  const context = useContext(KeyboardContext);
  if (!context) throw Error("The context is null.");
  return context;
};

export default KeyboardProvider;
