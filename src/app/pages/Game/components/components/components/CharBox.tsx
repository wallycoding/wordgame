import classNames from "classnames";

interface CharBoxProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  char?: string;
}

const CharBox = ({ char, className, ...props }: CharBoxProps) => {
  return (
    <button
      {...props}
      className={classNames(
        "relative w-full max-w-[3.5rem] cursor-pointer outline-none after:block after:pb-[100%] after:[content:'']",
        className
      )}
    >
      {char && (
        <div className="absolute grid h-full w-full place-items-center">
          {char}
        </div>
      )}
    </button>
  );
};

// shadow-[inset_0_0_0_2px] shadow-night-200
//

export default CharBox;
