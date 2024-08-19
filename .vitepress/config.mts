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
          { text: 'Передмова', link: './index' },
          { text: 'Реєстрація', link: './sign-up' },
          { text: 'Правила', link: './rules' },
          { text: 'Лаунчер & Моди', link: './modpack' },
          { text: 'Що робити далі?', link: './joining' },
          { text: 'Офіційні канали сервера', link: './channels' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stikulzon/borukva-guide' }
    ]
  }
})
