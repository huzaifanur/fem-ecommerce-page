import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "pale-orange": "hsl(25, 100%, 94%)",
        'neutral-900': "hsl(220, 13%, 13%)",
        'neutral-800': "hsl(219, 9%, 45%)",
        'neutral-700': "hsl(220, 14%, 75%)",
        'neutral-600': "blue: hsl(223, 64%, 98%)"
      },
      screens: {
        'mobile': '576px',
      },
      flexBasis: {
        '9/10': '90%',

      }
    },
    
  },
  plugins: [],
};
export default config;
