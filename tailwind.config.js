/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "night-auth":
          "linear-gradient(136.1deg, rgba(38, 36, 41, 0.8) -7.65%, rgba(29, 27, 31, 0) 91.77%)",
      },
      borderWidth: {
        1: "1px",
      },
      screens: {
        "big-sm": "448px",
        "md-small": "595px",
      },
      colors: {
        midnight: {
          50: "#eaeaea",
          100: "#e0dfe0",
          200: "#bebebf",
          300: "#2e2c30",
          400: "#29282b",
          500: "#252326",
          600: "#232124",
          700: "#1c1a1d",
          800: "#151416",
          900: "#100f11",
        },
        night: {
          50: "#e9e9ea",
          100: "#dededf",
          200: "#bcbbbd",
          300: "#262429",
          400: "#222025",
          500: "#1e1d21",
          600: "#1d1b1f",
          700: "#171619",
          800: "#111012",
          900: "#0d0d0e",
        },
        yellow: {
          50: "#fefef0",
          100: "#fefde9",
          200: "#fdfad1",
          300: "#f9f06b",
          400: "#e0d860",
          500: "#c7c056",
          600: "#bbb450",
          700: "#959040",
          800: "#706c30",
          900: "#575425",
        },
        green: {
          50: "#effef2",
          100: "#e8fdec",
          200: "#cffbd8",
          300: "#63f280",
          400: "#59da73",
          500: "#4fc266",
          600: "#4ab660",
          700: "#3b914d",
          800: "#2d6d3a",
          900: "#23552d",
        },
      },
    },
  },
  plugins: [],
};
