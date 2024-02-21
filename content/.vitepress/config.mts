import { defineConfig } from 'vitepress'

export default defineConfig({
  lastUpdated: true,

  themeConfig: {
    repo: 'q-0q/blog',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: 'Help us improve this page!',

    algolia: {
      indexName: 'vue-chartjs',
      apiKey: 'a1bb4528e8ed1eb89e40d6e4c1000514',
      appId: '24VA3R3NCC'
    },

    nav: [
      { text: 'Guide', link: '/guide/', activeMatch: '^/guide/' },
      {
        text: 'Migration guides',
        link: '/migration-guides/',
        activeMatch: '^/migration-guides/'
      },
      {
        text: 'API',
        link: '/api/',
        activeMatch: '^/api/'
      },
      {
        text: 'Examples',
        link: '/examples/',
        activeMatch: '^/examples/'
      },
      {
        text: 'Stack Overflow',
        link: 'https://stackoverflow.com/questions/tagged/vue-chartjs/'
      }
    ],

    Sidebar: 'auto',
  }
})