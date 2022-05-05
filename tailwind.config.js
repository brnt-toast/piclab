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
        'lines' : "url('/Lines.svg')"
      },
      backgroundSize: {
        'xl' : '150%'
      },
      lineHeight: {
        '11' : '6rem'
      },
      boxShadow: {
        'glowie': [
          '0 35px 60px -15px #D37B29',
          '0 35px 60px -15px #FF7A93',
          '0 35px 60px -15px #8240EF',
          '0 35px 60px -15px #EC3C48'

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