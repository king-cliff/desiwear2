
export default {
  basePath: 'https://king-cliff.github.io/desiwear2',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
