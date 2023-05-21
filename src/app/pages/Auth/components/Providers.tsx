"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
import Button from "@/app/components/Button";

type Provider = Parameters<typeof signIn>[0];

const Providers = () => {
  const [loading, setLoading] = useState<null | Provider>(null);
  const signin = (provider: Provider) => {
    return async () => {
      try {
        setLoading(provider);
        await signIn(provider);
      } catch {}
      setLoading(provider);
    };
  };
  return (
    <div className="mx-auto flex w-[90%] flex-col gap-3">
      <Button
        disabled={!!loading}
        loading={loading === "google"}
        icon={<AiFillGoogleCircle size={20} />}
        className="btn"
        onClick={signin("google")}
      >
        Google
      </Button>
      <Button
        disabled={!!loading}
        loading={loading === "github"}
        icon={<AiFillGithub size={20} />}
        className="btn"
        onClick={signin("github")}
      >
        Github
      </Button>
    </div>
  );
};

export default Providers;
