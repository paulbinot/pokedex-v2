<template>
  <div id="types-page">
    <h1>All types :</h1>
    <div v-if="typeListIsLoading">Chargement...</div>
    <TypesList v-else :typesList="this.typesList" @select="fetchPokemons"></TypesList>
    <h2>Pokemon of type : <span v-if="selectedTypeName">{{ this.selectedTypeName }}</span><span v-else>Please select a type</span></h2>
    <div v-if="pokemonListIsLoading === 'loading'">Chargement...</div>
    <PokemonList v-if="pokemonListIsLoading === 'loaded'" :pokemonList="this.pokemonsOfType"></PokemonList>
  </div>
</template>

<script>
import TypesList from '@/components/TypesList.vue';
import axios from 'axios';
import PokemonList from '@/components/PokemonList.vue';

export default {
  name: "typesView",
  components: { TypesList, PokemonList },
  data() {
    return {
      typesList: [],
      typeListIsLoading: true,
      pokemonsOfType: [],
      pokemonListIsLoading: 'standby',
      selectedTypeName: ''
    }
  },
  created() {
    this.fetchPokemonTypes();
  },
  methods: {
    async fetchPokemonTypes() {
      const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=18`);

      this.typesList = response.data.results;
      this.typeListIsLoading = false;
    },
    async fetchPokemons(tagName) {
      this.selectedTypeName = tagName;
      this.pokemonListIsLoading = "loading";
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${tagName}`);
      for (const pokemon of response.data.pokemon) {
        const response = await axios.get(pokemon.pokemon.url);
        pokemon.id = response.data.id;
        pokemon.name = pokemon.pokemon.name;
      }

      this.pokemonsOfType = response.data.pokemon.filter(pokemon => pokemon.id <= 905)
      // this.pokemonsOfType = response.data.pokemon;
      console.log(this.pokemonsOfType);
      this.pokemonListIsLoading = "loaded";
    }
  }
}
</script>

<style>
#types-page {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>