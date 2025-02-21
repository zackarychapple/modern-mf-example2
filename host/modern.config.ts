import {appTools, defineConfig} from '@modern-js/app-tools';
import {moduleFederationPlugin} from '@module-federation/modern-js';

export default defineConfig({
  dev: {
    port: 4000,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools(),
    moduleFederationPlugin()
  ]
});
