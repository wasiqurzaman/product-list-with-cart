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
      }
    },
  },
  plugins: [],
}

