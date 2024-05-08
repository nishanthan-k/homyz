// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: {
          DEFAULT: "var(--textColor)",
        },
        bgColor: {
          DEFAULT: "var(--bgColor)",
        },
      },
    },
  },
  plugins: [],
};