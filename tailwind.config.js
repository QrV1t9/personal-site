/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#282828",
      text: "#FFFFFF",
    },
    extend: {
      fontSize: {
        '53px': ['3.313rem', {
          lineHeight: '1rem',
        }],
        '32px': ['2rem', {
          lineHeight: '1rem',
        }],
        '36px': ['2.25rem', {
          lineHeight: '1rem',
        }]
      },
    }
  },
  plugins: [],
}
