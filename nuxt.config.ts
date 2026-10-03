export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'zh-CN' },
      link: [{ rel: 'canonical', href: '/' }]
    }
  },
  site: {
    url: 'https://example.com',
    name: '灵感 AI 导航',
    description: '精选 AI 写作、图像设计、视频创作、效率办公、开发编程与音频音乐工具导航。'
  },
  sitemap: { enabled: true },
  compatibilityDate: '2026-10-03'
})
