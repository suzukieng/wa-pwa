import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    cssMinify: false
  },
  base: '/wa-pwa/',
  plugins: [VitePWA({
    registerType: 'prompt',
    injectRegister: false,
    minify: false,

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'wa-pwa',
      short_name: 'wa-pwa',
      description: 'WebAudio Test PWA',
      theme_color: '#0f2a42',
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: false,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})
