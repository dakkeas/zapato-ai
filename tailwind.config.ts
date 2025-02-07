import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark-brown": "#c4bda7",
        "custom-light-brown": "#e3dbc3",
        "custom-light-grey": "#f3f3f3",
        "custom-red": "#d93844",
        "custom-dark-green": "#06534b",
        "custom-light-green": "#366c6a",
        "custom-grey": "#81899f",
      },
    },
  },
  plugins: [],
} satisfies Config;
