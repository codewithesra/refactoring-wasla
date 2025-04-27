/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        light: {
          primary: "#2563eb",
          secondary: "#7c3aed",
          background: "#f9fafb",
          text: "#111827",
          card: "#ffffff",
          border: "#e5e7eb",
        },
        dark: {
          primary: "#3b82f6",
          secondary: "#8b5cf6",
          background: "#111827",
          text: "#f3f4f6",
          card: "#1f2937",
          border: "#374151",
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
