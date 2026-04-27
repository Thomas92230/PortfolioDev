module.exports = {
  content: ["./index.html", "./app.js", "./src/**/*.vue"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#2b69fb',
          600: '#1a4dd6',
          700: '#1a003d',
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #0a001b 0%, #1a003d 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-word': 'fadeInWord 0.6s ease-out forwards',
        'scroll-left': 'scroll-left 30s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInWord: {
          '0%': { opacity: '0', transform: 'translateX(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}