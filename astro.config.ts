import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import unocss from 'unocss/astro'

export default defineConfig({
  site: 'https://imsfc.com',
  integrations: [
    mdx(),
    sitemap(),
    unocss({
      injectReset: true,
    }),
  ],
})
