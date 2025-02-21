import {createModuleFederationConfig} from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: 'header',
  exposes: {
    './header': './src/components/header.tsx',
  },
  remotes: {
    ssrprofile: 'ssrprofile@http://localhost:4002/remoteEntry.js',
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
