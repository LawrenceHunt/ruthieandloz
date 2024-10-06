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

export const reinkies = localFont({
  src: [
    {
      path: "./reinkies/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-reinkies",
});

export const birdCharms = localFont({
  src: [
    {
      path: "./bird-charms/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bird-charms",
});

export const boisDeJasmine = localFont({
  src: [
    {
      path: "./bois-de-jasmine/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-bois-de-jasmine",
});

export const darlingVintage = localFont({
  src: [
    {
      path: "./darling-vintage/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-darling-vintage",
});

export const palomaSignature = localFont({
  src: [
    {
      path: "./paloma-signature/regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-paloma-signature",
});
