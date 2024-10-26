import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        canela: ["var(--font-canela)", ...fontFamily.sans],
        "vintage-brush": ["var(--font-vintage-brush)", ...fontFamily.sans],
        reinkies: ["var(--font-reinkies)", ...fontFamily.sans],
        "bird-charms": ["var(--font-bird-charms)", ...fontFamily.sans],
        "bois-de-jasmine": ["var(--font-bois-de-jasmine)", ...fontFamily.sans],
        "darling-vintage": ["var(--font-darling-vintage)", ...fontFamily.sans],
        "paloma-signature": [
          "var(--font-paloma-signature)",
          ...fontFamily.sans,
        ],
      },
      colors: {
        pink1: "rgb(var(--color-pink1) / <alpha-value>)",
        pink2: "rgb(var(--color-pink2) / <alpha-value>)",
        pink3: "rgb(var(--color-pink3) / <alpha-value>)",

        green1: "rgb(var(--color-green1) / <alpha-value>)",
        green2: "rgb(var(--color-green2) / <alpha-value>)",
        green3: "rgb(var(--color-green3) / <alpha-value>)",

        purple1: "rgb(var(--color-purple1) / <alpha-value>)",
        purple2: "rgb(var(--color-purple2) / <alpha-value>)",
        purple3: "rgb(var(--color-purple3) / <alpha-value>)",
      },

      backgroundImage: {
        border1: "url('/wedding_svgs/Borders&Frames/1.svg')",
        border2: "url('/wedding_svgs/Borders&Frames/2.svg')",
        border3: "url('/wedding_svgs/Borders&Frames/3.svg')",
        border4: "url('/wedding_svgs/Borders&Frames/4.svg')",
        border5: "url('/wedding_svgs/Borders&Frames/5.svg')",
        border6: "url('/wedding_svgs/Borders&Frames/6.svg')",
        border7: "url('/wedding_svgs/Borders&Frames/7.svg')",
        border8: "url('/wedding_svgs/Borders&Frames/8.svg')",
        border9: "url('/wedding_svgs/Borders&Frames/9.svg')",
        border10: "url('/wedding_svgs/Borders&Frames/10.svg')",
        border11: "url('/wedding_svgs/Borders&Frames/11.svg')",
      },
      animation: {
        blink: "blink 1.4s step-end infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
