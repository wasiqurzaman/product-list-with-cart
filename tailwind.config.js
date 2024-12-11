/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "redhat-text": ["Red Hat Text", "sans-serif"]
      },
      colors: {
        Red: "hsl(14, 86%, 42%)",
        Green: "hsl(159, 69%, 38%)",
        "Rose-50": "hsl(20, 50%, 98%)",
        "Rose-100": "hsl(13, 31%, 94%)",
        "Rose-300": "hsl(14, 25%, 72%)",
        "Rose-400": "hsl(7, 20%, 60%)",
        "Rose-500": "hsl(12, 20%, 44%)",
        "Rose-900": "hsl(14, 65%, 9%)",
      },
      screens: {
        xs: "500px",
        sm: "680px"
      }

    },
  },
  plugins: [],
}

