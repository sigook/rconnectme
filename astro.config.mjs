import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.rconnectme.com',
  output: 'static',
  build: {
    format: 'file'
  }
});
