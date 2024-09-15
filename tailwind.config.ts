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
      colors: {},
    },
  },
  plugins: [],
} satisfies Config;
