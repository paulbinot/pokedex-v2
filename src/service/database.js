const baseURL = "https://pokeapi.co/api/v2/";

export async function getAllPokemons() {
  const response = await fetch(`${baseURL}pokemon?limit=905&offset=0`);
  const jsoned = await response.json();
  const pokemonList = jsoned.results;
  for (let index = 0; index < pokemonList.length; index++) {
    pokemonList[index].id = index+1;
  };
  return pokemonList;
};