import type { Metadata } from "next";
import { Zen_Maru_Gothic, Nunito } from "next/font/google";
import "./globals.css";


const zenMaruGothic = Zen_Maru_Gothic({
  weight: "400",
  variable: "--font-zen-maru-gothic",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Ivan Murphy - Computer SciencePortfolio",
  description: "I'm Ivan, a computer science student at the University of Southampton.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${zenMaruGothic.variable} ${nunito.variable} h-full antialiased leading-relaxed`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
