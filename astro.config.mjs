// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://bboy2009.github.io',
  base: '/CC_Research_2026_Website',

  vite: {
    plugins: [tailwindcss()],
  },
});