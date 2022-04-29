module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28F1FE',
        background: '#04082E',
        paper: '#141B52',
        paperLight: '#1F287A',
        textPrimary: '#D4E8F7',
        textSecondary: '#82ACC9',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
