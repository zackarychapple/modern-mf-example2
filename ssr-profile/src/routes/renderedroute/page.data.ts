export const loader = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}
