import classNames from "classnames";
import WordBox from "./components/WordBox";

interface EndGameProps {
  secretWord: string;
  win: boolean;
  onNext(): void;
  wordAttempts: string[];
}

const EndGame = (props: EndGameProps) => {
  return (
    <div className="fixed left-1/2 top-0 z-50 h-full w-full max-w-lg -translate-x-1/2">
      <div className="flex h-full flex-col items-center justify-between gap-5 border-x-1 border-night-500 bg-night-800/40 px-3 py-5 backdrop-blur-md">
        <div className="flex w-full flex-col items-center gap-6 overflow-y-auto px-2">
          <h1
            className={classNames(
              "text-center text-2xl font-bold uppercase p-3 rounded-md bg-night-700 w-full border-1 border-night-500",
              props.win ? "text-green-300" : "text-red-500"
            )}
          >
            {props.win ? "Parabéns, você ganhou!" : "Não foi dessa vez..."}
          </h1>
          {!props.win && (
            <div className="flex w-full flex-col gap-3">
              <div className="w-full">
                <WordBox
                  secretWord={props.secretWord}
                  word={props.secretWord}
                />
              </div>
              <div className="h-[2px] w-full bg-green-300" />
            </div>
          )}
          <div className="flex w-full flex-col gap-3">
            {props.wordAttempts.map((word, i) => {
              return (
                <WordBox key={i} word={word} secretWord={props.secretWord} />
              );
            })}
          </div>
        </div>
        <div className="flex w-full justify-center gap-3">
          <button className="btn w-full" onClick={props.onNext}>
            Próximo
          </button>
        </div>
      </div>
    </div>
  );
};

export default EndGame;
