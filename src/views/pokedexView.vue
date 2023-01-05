<template>
  <div>
    <div v-if="isLoading">Chargement ...</div>
    <PokemonList v-else :pokemonList="this.pokemonList"></PokemonList>
  </div>
</template>

<script>
import PokemonList from '@/components/PokemonList.vue';
import axios from 'axios';

export default {
  name: "PokedexView",
  components: { PokemonList },
  data() {
    return {
      pokemonList: [],
      isLoading: true
    }
  },
  created() {
    this.fetchPokemons();
  },
  methods: {
    async fetchPokemons() {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=905&offset=0`);
      const rawPokemonList = response.data.results;
      for (let index = 0; index < rawPokemonList.length; index++) {
        rawPokemonList[index].id = index + 1;
      };

      this.pokemonList = rawPokemonList;
      console.log(this.pokemonList);
      this.isLoading = false;
    }
  }
}
</script>

<style>

</style>
