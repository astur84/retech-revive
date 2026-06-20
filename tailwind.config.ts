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
        // Mapeo de tus variables originales de CSS
        bg: '#12181a',
        'bg-panel': '#1b2225',
        'bg-raised': '#212a2d',
        text: '#e9e5da',
        'text-muted': '#92a09b',
        cyan: '#5fd8e8',
        amber: '#ff9a4a',
        green: '#6ad17e',
        brick: '#7c4128',
      },
      fontFamily: {
        // Vincular con las variables definidas en layout.tsx
        sans: ['var(--font-plex-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
        display: ['var(--font-big-shoulders)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
