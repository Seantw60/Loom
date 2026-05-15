/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Loom brand colors (customize as needed)
        braid: {
          50: "#f8f7f6",
          100: "#f0ede8",
          500: "#8b7355",
          900: "#3d2817",
        },
        ribbon: {
          character: "#e74c3c",
          monster: "#9b59b6",
          item: "#f39c12",
          power: "#3498db",
          location: "#1abc9c",
        },
      },
      animation: {
        unfurl: "unfurl 0.6s ease-out",
        ribbonSlide: "ribbonSlide 0.35s ease-out",
        paneSlideIn: "paneSlideIn 0.35s ease-out",
      },
      keyframes: {
        unfurl: {
          "0%": { transform: "scaleX(0)", opacity: "0" },
          "100%": { transform: "scaleX(1)", opacity: "1" },
        },
        ribbonSlide: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        paneSlideIn: {
          "0%": { transform: "translateX(300px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
