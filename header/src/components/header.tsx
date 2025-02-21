import { loadRemote } from '@modern-js/runtime/mf';
import { registerRemotes } from '@module-federation/enhanced/runtime';
import './header.css';
import React from 'react';

registerRemotes([
  {
    name: 'ssrprofile',
    entry: 'http://localhost:4002/remoteEntry.js',
  }
]);

const SsrProfile = React.lazy(() =>
  loadRemote('ssrprofile/ssr-profile').then((m) => {
    return m;
  }),
);

const PreRenderedPokemon = React.lazy(() =>
  loadRemote('ssrprofile/rendered').then((m) => {
    return m;
  }),
);
const Header = () => {
  return (
    <div id="header">
      <div>OMG I'm a header</div>
      <SsrProfile />
      <div>Pure SSR Pokemon</div>
      <PreRenderedPokemon />
    </div>
  );
};

export default Header;
