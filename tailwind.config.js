const container = {
  center: true,
  padding: {
    DEFAULT: '15px',
  },
  screens: {
    DEFAULT: '100%',
    sm: '100%',
    md: '100%',
    lg: '100%',
    xl: '1368px'
  },
}

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container
    },
  },
  plugins: [],
}
