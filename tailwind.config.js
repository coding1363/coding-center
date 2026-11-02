/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vsBg: "var(--bg-primary)",
        vsCard: "var(--bg-secondary)",
        vsBorder: "var(--border-color)",
        vsText: "var(--text-primary)",
        vsBlue: "#007acc",
        vsTeal: "#4ec9b0",
        vsGreen: "#22c55e",
      },
    },
  },
  plugins: [],
};