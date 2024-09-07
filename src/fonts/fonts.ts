import localFont from "next/font/local";

export const canela = localFont({
  src: [
    {
      path: "./canela/regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./canela/light-italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./canela/bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./canela/bold-italic.otf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-canela",
});

export const vintageBrush = localFont({
  src: [
    {
      path: "./vintage-brush/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-vintage-brush",
});
