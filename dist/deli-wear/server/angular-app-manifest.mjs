
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://king-cliff.github.io/desiwear/',
  locale: undefined,
  routes: undefined,
  entryPointToBrowserMapping: {},
  assets: {
    'index.csr.html': {size: 4979, hash: 'f35128c506c1c3c71e52773aec033a1330ffc7ae4a7e26a8cdd99f4e740798b7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1095, hash: 'b03c217813b2b9a090408745a528b245390c53f5fc703d457246ec4a42ba70b9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5XR6DVYU.css': {size: 315271, hash: 'nxbzCijeD8U', text: () => import('./assets-chunks/styles-5XR6DVYU_css.mjs').then(m => m.default)}
  },
};
