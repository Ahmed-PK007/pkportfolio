import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { ink: "#08090c", panel: "#0e1016", line: "#252a36", blue: "#5a9cff" },
      boxShadow: { glow: "0 0 80px rgba(54, 126, 255, .16)" },
    },
  },
  plugins: [],
};

export default config;
