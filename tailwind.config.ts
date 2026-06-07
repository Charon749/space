import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: '#09090B',
  			foreground: '#F8FAFC',
  			card: {
  				DEFAULT: '#111827',
  				foreground: '#F8FAFC'
  			},
  			muted: '#94A3B8',
  			cosmic: {
  				purple: '#A78BFA',
  				blue: '#38BDF8'
  			},
  			border: 'rgba(148, 163, 184, 0.1)',
  			ring: '#A78BFA'
  		},
  		fontFamily: {
  			sans: ['Inter', 'Noto Sans SC', '-apple-system', 'BlinkMacSystemFont', 'sans-serif']
  		},
  		borderRadius: {
  			lg: '1rem',
  			md: '0.75rem',
  			sm: '0.5rem'
  		},
  		spacing: {
  			'18': '4.5rem',
  			'22': '5.5rem'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
