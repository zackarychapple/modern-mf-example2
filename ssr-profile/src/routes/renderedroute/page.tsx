import { useLoaderData } from '@modern-js/runtime/router';
export default () => {
  const pokemon:any = useLoaderData();
  return <div>{pokemon.name}</div>;
};
