import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar} from "./navbar/index.js";
import { enSidebar} from "./sidebar/index.js";

const footerICP_HTML = `
<a class="footer-icp" href="https://beian.miit.gov.cn" target="_blank">
<img alt="备案号" src="/XXXWeiiBlog/assets/images/beian.png" />粤ICP备2023032935号-1
</a>&nbsp;|&nbsp;主题：<a href="https://theme-hope.vuejs.press/">VuePress Theme Hope</a>&nbsp;|&nbsp;<a href="/intro">关于我的故事</a>`;

export default hopeTheme({
  hostname: "https://mister-hope.github.io",
  // 生成侧边栏
  sidebar: {
    "/HTML/": "structure",

    "/JavaScript/": "structure",

    // fallback
    "/": [
      "" /* / */,
      "contact" /* /contact.html */,
      "about" /* /about.html */,
    ],
  },
  author: {
    name: "XXXWeii",
    url: "https://github.com/XXXWeii",
  },

  iconAssets: "iconfont",

  logo: "/logo.jpg",

  repo: "https://github.com/XXXWeii/XXXWeiiBlog",
  repoLabel: "GitHub",
  repoDisplay: true,

  // hotReload: true,
  // 是否开启全屏模式
  fullscreen: true,
  // 是否显示页面最后更新时间
  lastUpdated:true,
  // 是否显示页面贡献者
  contributors:false,
  // 是否展示编辑此页链接
  editLink:true,

  backToTop:true,

  pageInfo: ['Author', 'Category', 'Date', 'Original', 'Tag', 'ReadingTime', 'Word', 'PageView'],

  blog: {
    description:"前途是光明的，道路是曲折的。",
    medias: {
      GitHub: "https://github.com/XXXWeii",
      Gitee: "https://gitee.com/XXXWeii",
      Twitter: "https://twitter.com/zjw977020546",
      Facebook: "https://www.facebook.com/QQ977020546",
      Gmail: "mailto:zjw977020546@gmail.com",
      Wechat: "/XXXWeiiBlog/assets/images/WeChat.jpg",
      QQ: "/XXXWeiiBlog/assets/images/QQ.jpg"
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: enNavbar,

      // sidebar
      sidebar: enSidebar,

      footer: footerICP_HTML,

      displayFooter: true,

      blog: {
        description: "带着思念期待着下次相见",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: "Edit this page on GitHub",
      },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: zhNavbar,

    //   // sidebar
    //   sidebar: zhSidebar,

    //   footer: "默认页脚",

    //   displayFooter: true,

    //   blog: {
    //     description: "一个前端开发者",
    //     intro: "/zh/intro.html",
    //   },

    //   // page meta
    //   metaLocales: {
    //     editLink: "在 GitHub 上编辑此页",
    //   },
    // },
  },
  plugins: {
    blog: true,
    
    comment: {
      // You should generate and use your own comment service
      provider: "Waline",
      serverURL: "https://waline-comment.vuejs.press",
    },

    git: true,

    seo: true,

    // feed支持
    feed:{
      rss:true
    },

    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    pwa: {
      favicon: '/favicon.ico',
      update:"available",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/pwa/144.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/pwa/144.png',
        color: '#000',
      },
      manifest: {
        icons: [
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/pwa/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa/192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },


  },
});
