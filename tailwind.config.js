module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        '_purple':'#6214E2',
        '_blue' : '#6100FF',
        '_pink' : '#F93BB8',
        '_orange' : '#FF4B40',
        '_saturated': "#17161D"
      },
      backgroundImage: {
        'grid' : "url('/grid.svg')",
        'glowies': "url('/Glowies.svg')",
        'lines' : "url('/Lines.svg')",
        'imgix' : "url('/imgix.svg')"
      },
      backgroundSize: {
        'xl' : '150%'
      },
      lineHeight: {
        '11' : '6rem'
      },
      dropShadow: {
        'glowie': [
          '0 0 200px rgba(211, 123, 41, 0.2)',
          '0 0 200px rgba(255, 122, 147, 0.2)', 
          '0 0 200px rgba(130, 64, 239, 0.2)',
          '0 0 200px rgba(236, 60, 72, 0.2)'

        ]
      }
    },
    fontSize:{
      'base': '1rem',   // 16px
      'lg': '1.125rem', // 18px
      'xl': '1.34rem',  // 20px
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