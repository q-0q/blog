import { defineConfig } from 'vitepress'

export default defineConfig({
  themeConfig: {
    siteTitle: "jack withers",

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/q-0q",
      },
    ],

    search: {
      provider: "local",
    },

    nav: [
      // {
      //   text: "gamedev",
      //   link: "/gamedev/",
      //   activeMatch: "^/gamedev/",
      // },
      {
        text: "writing",
        link: "/writing/",
        activeMatch: "^/writing/",
      },
    ],
  },
});