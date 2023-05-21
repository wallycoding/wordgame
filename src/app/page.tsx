import { getServerSession } from "next-auth";
import Auth from "./pages/Auth";

export default //
async function Root(props: any) {
  const session = await getServerSession();
  return session ? <h1>Game</h1> : <Auth />;
}
