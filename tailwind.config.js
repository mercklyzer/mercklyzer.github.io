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
        monument: ["Monument Extended", "sans-serif"]
      },
      colors: {
        light: '#f7f7f7',
        dark: '#1f1f1f',
        neon: '#bfdd21'
      },
      animation:{
        'spin-slow': 'spin 4s linear infinite'
      }
    },
  },
  
  plugins: [],
}
