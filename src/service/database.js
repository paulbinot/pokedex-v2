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

// Without promise.all :
// export async function getPokemonsOfOneType(typeName) {
//   const response = await axios.get(`${baseURL}type/${typeName}`);
//   for (const pokemon of response.data.pokemon) {
//     const response = axios.get(pokemon.pokemon.url);
    
//       pokemon.id = response.data.id;
//       pokemon.name = pokemon.pokemon.name;
//   }


//   return response.data.pokemon.filter(pokemon => pokemon.id <= 905);
// };

export async function getPokemonsOfOneType(typeName) {
  const response = await axios.get(`${baseURL}type/${typeName}`);

  const pokemonPromises = response.data.pokemon.map(pokemon => {
    return axios.get(pokemon.pokemon.url).then(res => {
      pokemon.id = res.data.id;
      pokemon.name = pokemon.pokemon.name;
      return pokemon;
    });
  });

  const pokemonList = await Promise.all(pokemonPromises);

  return pokemonList.filter(pokemon => pokemon.id <= 905);
};

export async function getPokemonAbilities(pokemonId) {
  const response = await axios.get(`${baseURL}pokemon/${pokemonId}`);
  const abilities = response.data.abilities;

  const abilitiesPromises = abilities.map(ability => {
    return axios.get(ability.ability.url).then(res => res.data);
  });

  const abilitiesList = await Promise.all(abilitiesPromises);
  
  for (const ability of abilitiesList) {
    const enEffectEntries = ability.effect_entries.filter(entry => entry.language.name === "en");
    ability.text = enEffectEntries[enEffectEntries.length - 1].effect;
  }

  return abilitiesList;
};

export async function getTypeInfos(typeName) {
  const response = await axios.get(`${baseURL}type/${typeName}`);
  const typeInfos = response.data;

  return typeInfos;
};

export async function getPokemonById(id) {
  const response = await axios.get(`${baseURL}pokemon/${id}`);
  response.data.weight = response.data.weight / 10;
  return response.data;
};

export async function getPokemonSpeciesById(id) {
  const response = await axios.get(`${baseURL}pokemon-species/${id}`);
  
  const flavorTextEntries = response.data.flavor_text_entries.filter(enEntries => enEntries.language.name === "en")
  response.data.text = flavorTextEntries[flavorTextEntries.length - 1].flavor_text;
  
  return response.data;
};

export async function getEvolutionChainByURL(url) {
  const response = await axios.get(url);
  const rawChain = response.data;

  // let chainEnd = true;
  let step = rawChain.chain;
  const chain = [];

  while (1) {
    chain.push(step.species);
    if (step.evolves_to.length === 0) {
      break
    } else {
      step = step.evolves_to[0];
    }
  };

  const pokemonPromises = chain.map(pokemon => {
    return axios.get(pokemon.url).then(res => {
      pokemon.id = res.data.id;
      return pokemon;
    });
  });

  const detailsChain = await Promise.all(pokemonPromises);

  return detailsChain.filter(pokemon => pokemon.id <= 905);
};

