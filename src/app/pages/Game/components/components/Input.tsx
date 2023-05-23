"use client";
import classNames from "classnames";
import { useKeyboardContext } from "@/app/providers/KeyboardProvider";
import CharBox from "./components/CharBox";

const Input = () => {
  const { chars, index, setIndex } = useKeyboardContext();
  return (
    <div className="flex justify-center gap-3">
      {chars.map((char, i) => (
        <CharBox
          key={i}
          className={classNames(
            "rounded-lg bg-night-600 text-3xl font-bold uppercase text-night-100",
            index === i && "shadow-[inset_0_0_0_2px] shadow-night-200"
          )}
          char={char}
          onClick={() => setIndex(i)}
        />
      ))}
    </div>
  );
};

export default Input;
