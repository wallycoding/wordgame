import normalizeWord from "@/utils/nomalizeWord";
import Gamepad from "./components/Gamepad";
import { randomWords } from "@/api/words";

const Game = async () => {
  const words = await randomWords();

  return (
    <main className="flex min-h-[100svh] justify-center">
      <div className="my-4 flex w-full max-w-4xl flex-col gap-3 overflow-auto">
        <Gamepad words={words} />
      </div>
    </main>
  );
};
export default Game;
