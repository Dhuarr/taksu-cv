/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ['./**/*.jsx'],
  darkMode: true,
  theme: {
    extend: {
      screens: {
        "phone-lg": {
            max: "900px",
        },
        phone: {
            max: "768px",
        },
    },
    },
  },
  plugins: [],
}
