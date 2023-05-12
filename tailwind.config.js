const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "pages/**/*.tsx",
    "shared/**/*.tsx",
    "hooks/**/*.tsx",
    "components/**/*.tsx",
    "app/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans, "Inter var"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
