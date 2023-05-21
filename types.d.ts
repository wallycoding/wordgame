declare namespace NodeJS {
  interface ProcessEnv {
    NEXTAUTH_SECRET: string;
    NEXTAUTH_URL: string;
    GITHUB_ID: string;
    GITHUB_SECRET: string;
    GOOGLE_ID: string;
    GOOGLE_SECRET: string;
  }
}

declare interface PageProps {
  params: { [k: string]: string };
  searchParams: { [k: string]: string };
}

declare interface OnlyChildrenProps {
  children: React.ReactNode;
}
