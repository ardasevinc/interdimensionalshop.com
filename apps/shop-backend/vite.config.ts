import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import Terminal from 'vite-plugin-terminal';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: 'server.ts',
      exportName: 'viteNodeApp',
      tsCompiler: 'swc',
      swcOptions: {},
    }),
    Terminal({ console: 'terminal' }),
  ],
});
