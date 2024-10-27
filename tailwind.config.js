/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        container: "1140px",
        slideContainer: "1909px",
      },
      fontSize: {
        common: "18px",
        hading: "57px",
      },
      colors: {
        commonBlue: "#005DFF",
      },
    },
  },
  plugins: [],
};
