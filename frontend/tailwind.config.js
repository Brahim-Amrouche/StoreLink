/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgWhite: "#F8F9FA",
        lineGrey: "#E0E1E2",
        focusBlack: "#2D3748",
        sideGrey: "#A0AEC0",
        mainColor: "#4FD1C5"
      },
      fontFamily: {
        "helvetica": ["Helvetica", "sans-serif"]
      }
    },
  },
  plugins: [],
}

