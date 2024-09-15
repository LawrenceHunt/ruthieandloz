import "~/styles/globals.css";
import "~/styles/letter.css";

import { canela, vintageBrush, reinkies } from "~/fonts/fonts";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Ruthie and Loz",
  description: "Wedding site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${canela.variable} ${vintageBrush.variable} ${reinkies.variable} h-full w-full`}
    >
      <body className="h-full w-full font-canela">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
