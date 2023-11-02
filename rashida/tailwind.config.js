/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary": "#494B47",
        "accent": "#BB4F1D", // Added single quotes around the color value
        "secondary": "#DBDBDB",
        "grey1":"#3D3E3C"
      }
    },
  },
  plugins: [],
}
