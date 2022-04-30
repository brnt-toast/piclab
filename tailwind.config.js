module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize:{
      'base': '1rem',   // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.25rem',  // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2rem',    // 32px
      '5xl': '3.2rem',  // 48px
      '6xl': '4.2rem',  // 67px
      '7xl': '5.4rem'   // 86px
    } 
  },
  plugins: [],
}