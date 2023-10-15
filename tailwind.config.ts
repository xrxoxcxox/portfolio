import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      serif: ["Shippori Mincho", "serif"],
    },
    fontSize: {
      xs: ["0.75rem", "1.5rem"],
      sm: ["0.9375rem", "1.6875rem"],
      md: ["1.125rem", "1.875rem"],
      lg: ["1.3125rem", "2.0625rem"],
      xl: ["1.5rem", "2.25rem"],
      "2xl": ["1.875rem", "2.625rem"],
      "3xl": ["2.25rem", "3rem"],
      "4xl": ["3rem", "3.75rem"],
      "5xl": ["3.75rem", "4.5rem"],
      "6xl": ["4.5rem", "5.25rem"],
      "7xl": ["5.25rem", "6rem"],
      "8xl": ["6rem", "6.75rem"],
      "9xl": ["7.5rem", "8.25rem"],
    },
    spacing: {
      0: "0",
      1: "0.375rem",
      2: "0.75rem",
      3: "1.125rem",
      4: "1.5rem",
      5: "1.875rem",
      6: "2.25rem",
      7: "2.625rem",
      8: "3rem",
      9: "3.375rem",
      10: "3.75rem",
      12: "4.5rem",
      14: "5.25rem",
      16: "6rem",
      20: "7.5rem",
      24: "9rem",
      28: "10.5rem",
      32: "12rem",
      36: "13.5rem",
      40: "15rem",
    },
    extend: {
      width: {
        content: "1080px",
      },
    },
  },
  plugins: [],
} satisfies Config;
