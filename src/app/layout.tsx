import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Word Game",
  description:
    "Bem-vindo ao nosso emocionante site de jogos de palavras! Prepare-se para uma experiência empolgante e desafiadora ao mergulhar no cativante mundo dos quebra-cabeças de palavras e desafios que estimulam o cérebro.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="bg-night-800 bg-[url('../assets/backgrounds/bg-balls.svg')]">
          {children}
        </div>
      </body>
    </html>
  );
}
