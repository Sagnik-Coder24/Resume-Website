/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonGreen: "#39FF14", // This defines neon green as #39FF14
      },
      screens: {
        "custom-xlg": "1400px",
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        scaleUp: "scaleUp 0.5s ease-in-out",
        bounce: "bounce 1s ease-in-out infinite",
        gradientShift: "gradientShift 2s linear infinite",
        slideIn: "slideIn 1s ease-out",
        slideDown: "slideDown 300ms ease-out",
        slideUpNav: "slideUpNav 300ms ease-in",
        slideUp: "slideUp 0.5s ease-in",
        rotate: "rotate 2s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0)" },
          "100%": { transform: "scale(1)" },
        },
        bounce: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
          "100%": { transform: "translateY(0)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "100% 0%" },
          "50%": { backgroundPosition: "0% 100%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
        slideIn: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        slideUpNav: {
          "0%": { transform: "translateY(0%)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [],
};
