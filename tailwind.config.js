module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#28F1FE',
        primaryDark: '#06BBC6',
        background: '#04082E',
        backgroundOpacity: '#04082E20',
        paper: '#141B52',
        paperLight: '#1F287A',
        textPrimary: '#D4E8F7',
        textSecondary: '#82ACC9',
      },
      fontFamily: {
        mono: ['Fira Code', 'monospace'],
      },
      keyframes: {
        swipeFromLeft: {
          '0%': { transform: 'translateX(100%)' },
          '50%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        swipeFromLeft: 'swipeFromLeft 500ms var(--ease-out)',
      },
    },
  },
  plugins: [],
};
