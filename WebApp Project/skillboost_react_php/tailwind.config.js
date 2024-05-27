// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      colors: {
        gradient: {
          'primary-gradient': 'linear-gradient(180deg, #b924ff, #5200ff)'
        },
        brand: {
          'lightest': '#F7F3FF',
          'lighter': '#915CFF',
          'default': '#5200FF', 
          'darker': '#4B0CCF'
        },
        background: {
          'primary': '#FFFFFF',
          'secondary': '#FAFAFA',
          'third': '#F6F6F6', 
          'green': '#D0FFE9',
          'red': '#FFF3F3',
          'cyan': '#EBFBFF',
        },
        text: {
          'primary': '#1A1F23',
          'secondary': '#5E6A6E',
          'third': '#BEBEBE',
          'white': '#FFFFFF',
          'blue': '#1E9BFF',
        },
        outline: {
          'placeholder': '#DFDFDF',
          'card': '#F8F8F8',
          'button': '#F0F0F0', 
          'table': '#EFEFEF',
          'divider': '#E6E6E6',
          'card-holder': '#D7D7D7',
        },
        sematic: {
          'red': '#FF4141',
          'yellow': '#F0BD0A',
          'green': '#27AE60', 
          'blue': '#008EFF',
        },
      }
    },
  },
  plugins: [],
};
