// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#ffffff', // white
        secondary: '#f7f7f7', // light gray
        accent: '#1a202c', // dark gray or navy for contrast
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all component files here
  ],
};
