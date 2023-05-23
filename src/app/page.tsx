import { getServerSession } from "next-auth";
import Auth from "./pages/Auth";
import Game from "./pages/Game";

export default //
async function Root(props: any) {
  const session = await getServerSession();
  // @ts-ignore
  return session ? <Game /> : <Auth />;
}
