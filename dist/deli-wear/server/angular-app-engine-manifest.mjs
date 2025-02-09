
export default {
  basePath: 'https://king-cliff.github.io/desiwear',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
