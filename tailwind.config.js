/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['DM Sans'],
      display: ['Josefin Sans'],
    },
    extend: {
      backgroundColor: {
        primary: "#ffffff",
        primaryDark: "#111827",
        secondary: "#F1F5F9",
        secondaryDark: "#1E293B",
      },
      borderColor: {
        primary: "#000000",
        primaryDark: "#ffffff",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        openLeft: {
          "0%": { opacity: 0, transform: "translateX(20%)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
        appearUpwards: {
          "0%": { opacity: 0, transform: "translateY(20%)" },
          "100%": { opacity: 1, transform: "translateY(0%)" },
        }
      }
    },
    animation: {
      openLeft: "openLeft 0.3s ease-in-out",
      appearUpwards: "appearUpwards 0.3s ease-in-out",
    },
  },
  plugins: [],
}
