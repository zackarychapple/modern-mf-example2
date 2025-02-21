import {Suspense} from 'react';
import {Await} from '@modern-js/runtime/router';
import './style-profile.css';

interface UserInfo {
  id: number;
  title: string;
}

const timeout = 2000;
const getPokemon = fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });
const prefetchResult = new Promise((resolve) => {
  setTimeout(() => {
    resolve({
      data: {
        id: 123,
        title: 'best in the world'
      }
    });
  }, timeout);
});

const Ssrheader = () => {
  return (
    <div id="ssrheaderdata">
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={getPokemon}
          children={pokemon => (
            <div>
              <span>This data was loaded from pokemon api on the server</span>
              <div>Pokemon name loaded with csr fetch: {pokemon.name}</div>
            </div>
          )}
        />
        <Await
          resolve={prefetchResult}
          children={userInfo => (
            <div>
              <span>This data was loaded with {timeout}ms delay</span>
              <div>User ID: {userInfo.data.id}</div>
              <div>User Title: {userInfo.data.title}</div>
            </div>
          )}
        />
      </Suspense>
    </div>
  );
};

export default Ssrheader;
