/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        border: 'border 4s ease infinite',
        rotate: "rotate 8s linear infinite",
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(21px)',
      },
      borderColor: {
        'custom': 'rgba(239, 239, 239, 0)'
      },
      keyframes: {
        border: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require("daisyui")
  ],
}

