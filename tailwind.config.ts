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
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary':"#129A7F",
        'digital':'#119A7D',
        'startCardGrident':"#06988E",
        'endCardGrident':"#024D49",
        'titleCard':'#119A7D',
        'ourClient':'#032D2B',
        'backgroundFotter':'#008A81',
        'titleHome':'#034843',
        'subtitleHome':'#032D2B',
        'allservices':'#032D2B',
        'AInavbar':'#129A7F',
        'backgroundGlassy':'#129A7F',
        'Line':'#119A7D',
        'textButton':'#12515E',
        'subtitleCard':'#4B4B4B',
        'language':'#F5FFFE',
        'doctornav':'#000304',
      },
      container : {
        screens : {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1200px',
          '2xl': '1367px',
        }
      },
    },
  },
  plugins: [],
};
export default config;
