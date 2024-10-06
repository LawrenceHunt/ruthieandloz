import "~/styles/globals.css";
import "~/styles/letter.css";

import {
  canela,
  vintageBrush,
  reinkies,
  birdCharms,
  boisDeJasmine,
  darlingVintage,
  palomaSignature,
} from "~/fonts/fonts";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/cn.util";

export const metadata: Metadata = {
  title: "Ruthie and Loz",
  description: "Please come to our wedding",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn(
        canela.variable,
        vintageBrush.variable,
        reinkies.variable,
        birdCharms.variable,
        boisDeJasmine.variable,
        darlingVintage.variable,
        palomaSignature.variable,
        "h-full w-full",
      )}
    >
      <body className="h-full w-full bg-[#FFF9F0] font-canela">
        <TRPCReactProvider>{children}</TRPCReactProvider>
      </body>
    </html>
  );
}
