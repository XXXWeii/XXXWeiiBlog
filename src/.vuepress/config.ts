import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { searchPlugin } from "@vuepress/plugin-search";


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


  // Enable it with pwa
  // shouldPrefetch: false,

  plugins: [
    searchPlugin({
      // 你的选项
    })
   ]
});
