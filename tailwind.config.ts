import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary)/ <alpha-value>)',
        secondary: 'rgb(var(--secondary))',
        accent: 'rgb(var(--accent)/ <alpha-value>)',
        gray: {
          50: 'rgb(var(--slate-white)),'
        },
        slate: {
          300: 'rgb(var(--slate-light))',
        },
        background: 'rgb(var(--background))',
        white: 'rgb(var(--white))',  
        blue: {
          DEFAULT: '#07f'
        }
      }
    },
  },
  plugins: [],
};
export default config;
