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
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // ...
  ],
} satisfies Config;
