/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1312px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'primary-100': '#DEFDF5',
        'primary-200': '#BFFBF1',
        'primary-300': '#9CF5EE',
        'primary-400': '#81ECEC',
        'primary-500': '#59D5E0',
        'primary-600': '#41ABC0',
        'primary-700': '#2C84A1',
        'primary-800': '#1C6081',
        'primary-900': '#11466B',
        'secondary-100': '#DBFCFD',
        'secondary-200': '#B8F6FC',
        'secondary-300': '#94E7F7',
        'secondary-400': '#77D4F0',
        'secondary-500': '#4CB9E7',
        'secondary-600': '#3792C6',
        'secondary-700': '#266FA6',
        'secondary-800': '#184F85',
        'secondary-900': '#042566',
        'neutral-100': '#A9A9A9',
        'neutral-300': '#848484',
        'neutral-500': '#5E5E5E',
        'neutral-700': '#383838',
        'neutral-900': '#131313',
        'success-100': '#CCFBD5',
        'success-300': '#66EC99',
        'success-500': '#0BC175',
        'success-700': '#058A6D',
        'success-900': '#025C5A',
        'warning-100': '#FFF8D7',
        'warning-300': '#FFE588',
        'warning-500': '#FFCA3A',
        'warning-700': '#B7851D',
        'warning-900': '#7A500B',
        'error-100': '#FFEADF',
        'error-300': '#FFB0A0',
        'error-500': '#FF6161',
        'error-700': '#B73048',
        'error-900': '#7A1236',
        'shade-100': '#FFFFFF',
        'shade-300': '#000000',
        'shade-500': '#F9F9F9',
        'shade-700': '#EAEAEA',
        'shade-900': '#C1D1DA',
        'heading-secondary': '#ADACAC',
      },
    },
  },
  plugins: [],
};
