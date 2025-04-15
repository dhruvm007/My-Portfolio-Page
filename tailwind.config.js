/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 3s ease-in-out infinite",
      },
      keyframes: {
        blob: {
          "0%": { borderRadius: "30rem 20rem 20rem 35rem / 30rem 15rem 35rem 20rem" },
          "50%": { borderRadius: "25rem 25rem 15rem 30rem / 25rem 25rem 40rem 15rem" },
          "100%": { borderRadius: "30rem 20rem 20rem 35rem / 30rem 15rem 35rem 20rem" },
        },
      },
      boxShadow: {
        cyan: "0rem 0.5rem 3.5rem 0.5rem rgba(0, 255, 255, 0.5)",
      },
      backgroundImage: {
        'gradient-grey': 'radial-gradient(circle, #000000, #2e2e2e, #4b4b4b)',
      }
    },
  },
  plugins: [],
}