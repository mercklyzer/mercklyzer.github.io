module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Open Sans", "sans-serif"],
        maven: ["Maven Pro", "sans-serif"],
        bebas: ["Bebas Neue", "cursive"],
        monument: ["Monument Extended", "sans-serif"],
        londrina: ["Londrina Outline", "cursive"]
      },
      colors: {
        light: '#f7f7f7',
        dark: '#0a0a0a',
        neon: '#dcff7d',
        silver: '#c7c7c7'
      },
      animation:{
        'spin-slow': 'spin 4s linear infinite'
      },

    },
  },
  
  plugins: [],
}
