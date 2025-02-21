import {createModuleFederationConfig} from "@module-federation/modern-js";

export default createModuleFederationConfig({
  name: 'host',
  exposes: {},
  remotes: {
    header: 'header@http://localhost:4001/remoteEntry.js',
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
