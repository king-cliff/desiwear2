
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://king-cliff.github.io/desiwear2/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4980, hash: 'efdd19c85d7b345ddafee60d9167c7dc076c92800abf74a7a77a80e945c8e433', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1096, hash: '729a2d01981b73c27e03ddab4dcd941071dbcca975e899aaed986ac270b748d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XR6DVYU.css': {size: 315271, hash: 'nxbzCijeD8U', text: () => import('./assets-chunks/styles-5XR6DVYU_css.mjs').then(m => m.default)}
  },
};
