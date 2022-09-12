const daisyui = require('daisyui');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['roboto', ...defaultTheme.fontFamily.sans]
      }
    }
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]']
        },
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]']
        }
      }
    ]
  },
  plugins: [daisyui]
};

module.exports = config;
