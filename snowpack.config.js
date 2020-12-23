/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // './src/pages': '/_dist_',
    // './src/pages/about/': {url: '/pages/about/', static: false},
    // './src/pages/index/': {url: '/pages/index/', static: false},
    test: {url: '/', static: true},
    public: {url: '/', static: true},
    src: {url: '/_dist_'},
    // public: {url: '/', static: true},
    // src: {url: '/_dist_'},
    //public: {url: "/", static: true, staticHtml:true,resolve: false}, // public: {url: "/", static: true, staticHtml:true,resolve: false}
    //src: {url: "/_dist_",static: true, staticHtml:true,resolve: false}, //src: {url: "/_dist_",static: true, staticHtml:true,resolve: false}, 
  },
  //plugins: ['@snowpack/plugin-webpack', '@snowpack/plugin-vue', '@snowpack/plugin-dotenv'], //,
  plugins: [
    '@snowpack/plugin-webpack',
    '@snowpack/plugin-vue',
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    ["@snowpack/plugin-build-script", { "cmd": "postcss", "input": [".css"], "output": [".css"] }]], //,
  install: [
    /* ... */
  ],
  installOptions: {
  /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  proxy: {
    /* ... */
  },
  alias: {
  /* ... */
  },
};
