import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://www.bryanvanwinnendael.me',
  output: 'static',
  adapter: vercel(),
  integrations: [react()],
});
