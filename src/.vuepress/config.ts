import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/XXXWeiiBlog/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "XXXWeii",
      description: "XXXWeii的博客",
    },
  },

  theme,

  alias: {
    "@theme-hope/modules/blog/components/BlogHero": path.resolve(
      __dirname,
      "./components/BlogHero.vue"
    ),

  },

  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
    }),

   ]
});
