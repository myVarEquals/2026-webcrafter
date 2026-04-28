// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import preact from '@astrojs/preact';

import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({

  vite: {
      plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Permanent Marker',
      cssVariable: "--permanent-marker",
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Varela Round',
      cssVariable: "--varela-round",
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Noto Sans',
      cssVariable: "--noto-sans",
    }
  ],

  integrations: [preact()],

  output: "static",

  site: "https://2026-webcrafter.netlify.app",

  adapter: netlify(),  
  
});