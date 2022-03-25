module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": ["Archivo", "sans-serif"]
      },
      colors: {
        "black": {
          "500": "#555",
          "600": "#444",
          "700": "#333",
          "800": "#222",
          "900": "#111",
        }
      }
    },
  },
  plugins: [],
}
