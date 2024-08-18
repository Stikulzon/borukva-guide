import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Borukva Guide",
  description: "Гайд для серверу Боруква",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Почати грати',
        collapsed: true,
        items: [
          { text: 'Передмова', link: './get-started/index' },
          { text: 'Реєстрація', link: './get-started/sign-up' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stikulzon/borukva-guide' }
    ]
  }
})
