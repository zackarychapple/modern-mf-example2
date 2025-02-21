import {createModuleFederationConfig} from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: 'ssrprofile',
  exposes: {
    './ssr-profile': './src/components/ssr-profile.tsx',
    './rendered': './src/routes/renderedroute/page.tsx',
  },
  runtimePlugins: ['./runtimePlugin.ts'],
  filename: 'remoteEntry.js',
  shared: {
    'react/': {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
    react: {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
    'react-dom/': {
      singleton: true,
      requiredVersion: '^18.3.1',
    },
  },
  experiments: {
    federationRuntime: 'hoisted',
  },
  dataPrefetch: true,
})
