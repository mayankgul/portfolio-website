import type { Config } from 'tailwindcss'

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Default body font
        poppins: ["Poppins", "sans-serif"], // Custom heading font
      },
    },
  },
  plugins: [],
}

export default config
