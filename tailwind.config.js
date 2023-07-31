/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent:'transparent',
      white:{
        DEFAULT: '#ffffff'
      },
      black:{
        DEFAULT: '#000000',
        100: '#E4E4E4',
      },
      gray:{
        DEFAULT: '#707070',
        100: '#141414',
        200: '#292929',
      },
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      primary_Variable: ['Satoshi-Variable'],
      primary_Light: ['Satoshi-Light'],
      primary_LightItalic: ['Satoshi-LightItalic'],
      primary_Regular: ['Satoshi-Regular'],
      primary_Italic: ['Satoshi-Italic'],
      primary_Medium: ['Satoshi-Medium'],
      primary_MediumItalic: ['Satoshi-MediumItalic'],
      primary_Bold: ['Satoshi-Bold'],
      primary_BoldItalic: ['Satoshi-BoldItalic'],
      primary_Black: ['Satoshi-Black'],
      primary_BlackItalic: ['Satoshi-BlackItalic'],
      secondary_Variable: ['PPCirka-Variable'],
      secondary_Light: ['PPCirka-Light'],
      secondary_Bold: ['PPCirka-Bold'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}