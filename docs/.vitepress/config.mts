import { defineConfig } from 'vitepress'


export default defineConfig({
  themeConfig: {
    siteTitle: "Jack Withers",

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
      {
        text: "psn",
        link: "/psn/",
        activeMatch: "^/psn/",
      },

      {
        text: "wasp",
        link: "/wasp/",
        activeMatch: "^/wasp/",
      },

      {
        text: "writing",
        link: "/writing/",
        activeMatch: "^/writing/",
      },
    ],
  },

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === "lite-youtube",
      },
    },
  },

});

