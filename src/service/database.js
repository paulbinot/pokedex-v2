const baseURL = "https://pokeapi.co/api/v2/";
import axios from "axios";

export async function getAllPokemons() {
  const response = await fetch(`${baseURL}pokemon?limit=905&offset=0`);
  const jsoned = await response.json();
  const pokemonList = jsoned.results;
  for (let index = 0; index < pokemonList.length; index++) {
    pokemonList[index].id = index+1;
  };
  return pokemonList;
};

export async function getPokemonDetails(id) {
  const response = await fetch(`${baseURL}pokemon/${id}`);
  const pokemonDetails = await response.json();
  return pokemonDetails;
};

export async function getAllTypes() {
  const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=18`);
  const allTypes = response.data.results;
  return allTypes;
};

export async function getPokemonsOfOneType(typeName) {
  const response = await axios.get(`${baseURL}type/${typeName}`);
  for (const pokemon of response.data.pokemon) {
    const response = await axios.get(pokemon.pokemon.url);
    pokemon.id = response.data.id;
    pokemon.name = pokemon.pokemon.name;
  }

  return response.data.pokemon.filter(pokemon => pokemon.id <= 905);
};

export async function getTypeInfos(typeName) {
  const response = await axios.get(`${baseURL}type/${typeName}`);
  const typeInfos = response.data;

  return typeInfos;
};

