import icon from "@/assets/icons/icon-with-stroke.png";
import Image from "next/image";
import Providers from "./components/Providers";

const Auth = () => {
  return (
    <div className="grid min-h-[100svh] w-full place-items-center">
      <form className="flex w-full max-w-md flex-col gap-14 border-1 border-night-300 bg-night-auth px-8 py-12 backdrop-blur-lg big-sm:rounded-lg">
        <div className="flex items-center justify-between">
          <h1 className="text-stroke-white text-5xl font-black">Sign In</h1>
          <Image className="h-16 w-16" src={icon} alt="logo" />
        </div>
        <Providers />
      </form>
    </div>
  );
};

export default Auth;
