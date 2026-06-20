// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  // ... resto igual
  ],
  theme: {
    extend: {
      colors: {
        bg: '#12181a',
        'bg-panel': '#1b2225',
        cyan: '#5fd8e8',
        amber: '#ff9a4a',
        // Añadimos estos para que 'text-text' y 'text-muted' funcionen
        text: '#e9e5da',
        'text-muted': '#a0a0a0', 
      },
      fontFamily: {
        // Esto soluciona tu 'font-display' y 'font-mono'
        display: ['sans-serif'], 
        mono: ['monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
