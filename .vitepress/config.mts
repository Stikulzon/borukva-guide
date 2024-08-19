import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Borukva Guide",
  description: "Гайд для серверу Боруква",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.png',

    nav: [
      { text: 'Додому', link: '/' },
      { text: 'Гайд для новачків', link: '/get-started/index' },
    ],

    sidebar: [
      {
        text: 'Початок гри',
        collapsed: true,
        items: [
          { text: 'Передмова', link: './index' },
          { text: 'Реєстрація', link: './sign-up' },
          { text: 'Правила', link: './rules' },
          { text: 'Лаунчер & Моди', link: './modpack' },
          { text: 'Що робити далі?', link: './joining' },
          { text: 'Офіційні канали сервера', link: './channels' },
          { text: 'Команди Борукви', link: './commands' },
          { text: 'Як отримати допомогу від адміністрації?', link: './admin-ticket' },
          { text: 'Економіка', link: './economics' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stikulzon/borukva-guide' },
      // https://vitepress.dev/reference/default-theme-config#sociallinks
    ]
  }
})
