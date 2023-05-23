import classNames from "classnames";
import { HiOutlineBackspace, HiCheck } from "react-icons/hi";
import useKeyboard, { KeyType, KeyboardProps } from "./useKeyboard";

const keyboardCharMap = [
  "qwertyuiop".split(""),
  "asdfghjkl".split(""),
  "zxcvbnm".split(""),
];

const charClassNames = [
  "bg-green-500 text-night-300",
  "bg-yellow-500 text-night-300",
  "bg-midnight-800/50 text-night-200 backdrop-blur-lg",
];

const Keyboard = (props: KeyboardProps) => {
  const { usedKeys, onKeyDownEvent } = useKeyboard(props);
  return (
    <div className="flex flex-col items-center">
      <div className="relative flex flex-col items-center gap-2">
        {keyboardCharMap.map((keys, i) => {
          return (
            <div key={i} className="flex gap-[0.4rem]">
              {keys.map((char) => {
                const className = usedKeys.has(char)
                  ? charClassNames[usedKeys.get(char)!]
                  : "bg-night-600 text-night-200";
                return (
                  <div
                    key={char}
                    className={classNames(
                      "relative h-[3rem] w-[2rem] cursor-pointer rounded-sm md-small:h-[2.5rem] md-small:w-[2.5rem]",
                      className
                    )}
                  >
                    <button
                      className="grid h-full w-full place-items-center text-sm font-bold uppercase"
                      onClick={() => onKeyDownEvent(KeyType.CHAR, char)}
                    >
                      {char}
                    </button>
                  </div>
                );
              })}
              {i === 1 && (
                <div className="h-[3rem] w-[2rem] cursor-pointer rounded-sm bg-night-200/40 text-night-50 backdrop-blur-lg md-small:h-[2.5rem] md-small:w-[2.5rem]">
                  <button
                    className="grid h-full w-full place-items-center text-lg font-bold uppercase"
                    onClick={() => onKeyDownEvent(KeyType.COMMAND, "Backspace")}
                  >
                    <HiOutlineBackspace />
                  </button>
                </div>
              )}
              {i == 2 && (
                <div className="h-[3rem] w-[2rem] cursor-pointer rounded-full bg-green-400 text-night-300 md-small:h-[2.5rem] md-small:w-[2.5rem]">
                  <button
                    className="grid h-full w-full place-items-center text-lg font-bold uppercase"
                    onClick={() => onKeyDownEvent(KeyType.COMMAND, "Enter")}
                  >
                    <HiCheck />
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keyboard;
