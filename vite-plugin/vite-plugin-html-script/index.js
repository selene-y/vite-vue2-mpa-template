import * as path from 'path';

export default function HtmlScriptPlugin(rawOptions) {
  return {
    name: "html-script-plugin",
    transformIndexHtml(html, ctx) {
      return [
        {
          tag: 'script',
          injectTo: 'body',
          attrs: {
            src: path.join('/', ctx.path, '..', 'main.js'),
            type: "module"
          },
        }
      ];
    },
  };
}