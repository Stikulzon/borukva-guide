import { defineConfig } from 'vitepress'
import {baseRoutePath} from "./data/constants";

// Define constants


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: baseRoutePath,
  title: "Borukva Guide",
  description: "Гайд для серверу Боруква",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/images/logo.avif',

    nav: [
      { text: 'Додому', link: '/' },
      { text: 'Гайд для новачків', link: '/get-started/index' },
    ],

    sidebar: [
      {
        text: 'Початок гри',
        collapsed: false,
        items: [
          { text: 'Передмова', link: '/get-started/index' },
          { text: 'Реєстрація', link: '/get-started/sign-up' },
          { text: 'Правила', link: '/get-started/rules' },
          { text: 'Лаунчер & Моди', link: '/get-started/modpack' },
          { text: 'Що робити далі?', link: '/get-started/joining' },
          { text: 'Офіційні канали сервера', link: '/get-started/channels' },
          { text: 'Команди Борукви', link: '/get-started/commands' },
          { text: 'Як отримати допомогу від адміністрації?', link: '/get-started/admin-ticket' },
          { text: 'Економіка', link: '/get-started/economics' },
          // { text: 'Об`єднання гравців', link: '/get-started/player-groups' },
          { text: 'Івенти', link: '/get-started/events' },
        ]
      },
      {
        text: 'Механіки',
        collapsed: false,
        items: [
          { text: 'Вступ', link: '/mechanics/index' },
          { text: 'Голосовий чат', link: '/mechanics/voice-chat'},
          { text: 'Онлайн мапа сервера', link: '/mechanics/dynmap'},
          { text: 'Артефакти', link: '/mechanics/artefacts'},
          { text: 'Кастомні крафти', link: '/mechanics/custom-crafts'},
          //{ text: 'Налаштуй сою стійку для броні', link: '/mechanics/armorstand-editor'},
          //{ text: 'Броварництво', link: '/mechanics/brewery'},
          { text: 'Радіо', link: '/mechanics/radio'},
          { text: 'Рейки', link: '/mechanics/rails'},
          { text: 'Фермерство', link: '/mechanics/farming'},
          { text: 'Нові рослини', link: '/mechanics/new-plants'},
          { text: 'Їжа Борукви', link: '/mechanics/food'},
          {
            text: 'Polydecorations',
            collapsed: true,
            items: [
              { text: 'Молоток', link: '/mechanics/polydecorations/hammer'},
              { text: 'Полотно', link: '/mechanics/polydecorations/canvas'},
              { text: 'Меблі', link: '/mechanics/polydecorations/furniture'},
            ]
          },
        ]
      }
      
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Stikulzon/borukva-guide' },
      // https://vitepress.dev/reference/default-theme-config#sociallinks
    ]
  }
})
