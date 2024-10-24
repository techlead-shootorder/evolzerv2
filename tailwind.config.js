/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      container: {
        center: true, // Optional: centers the container
        padding: '1rem', // Optional: adjust padding as needed
        screens: {
          DEFAULT: '1140px', // Set the default container width to 1140px
        },
      },
    },
  },
  plugins: [],
};
