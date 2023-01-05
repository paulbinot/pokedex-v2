<template>
  <div id="types-page">
    <h1>All types :</h1>
    <div v-if="typeListIsLoading">Types list loading...</div>
    <TypesList v-else :typesList="this.typesList" @select="fetchPokemons"></TypesList>
    <div class="separator"></div>
    <div class="pokemon-infos">
      <div class="top">  
        <div class="top-left">
          <div class="sticky">
            <p v-if="typeInfosAreLoading === 'loading'"></p>
            <div class="pokemons-infos__container border corners">
              <h2>Pokemons of type : <span v-if="selectedTypeName" style="color: yellow;">{{ this.selectedTypeName }}</span><span v-if="selectedTypeName === ''" style="color: yellow;">Please select a type</span></h2>
              <p v-if="typeInfosAreLoading === 'loading'">Type infos are loading ...</p>
              <div class="infos" v-if="typeInfosAreLoading === 'loaded'">
                <h4>Number of pokemon: <span style="color: yellow;" v-if="pokemonListIsLoading === 'loading'">Loading...</span><span style="color: yellow;" v-if="pokemonListIsLoading === 'loaded'">{{ pokemonsOfType.length }}</span></h4>
                <div class="separator"></div>
                <h4>Double damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.double_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <div class="separator"></div>
                <h4>Double damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.double_damage_to" :key="oneType">=> {{ oneType.name }}</p>
                <div class="separator"></div>
                <h4>Half damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.half_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <div class="separator"></div>
                <h4>Half damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.half_damage_to" :key="oneType">=> {{ oneType.name }}</p>
                <div class="separator"></div>
                <h4>No damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.no_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <div class="separator"></div>
                <h4>No damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.no_damage_to" :key="oneType">=> {{ oneType.name }}</p>
              </div>
    
              <!-- corners -->
              <div class="top-left-corner corner pixel outerpx"></div>
              <div class="top-right-corner corner pixel outerpx"></div>
              <div class="bottom-left-corner corner pixel outerpx"></div>
              <div class="bottom-right-corner-hd corner">
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel borderpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel borderpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel borderpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel innerpx"></div>
                <div class="pixel borderpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel borderpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
                <div class="pixel outerpx"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-right">
          <div v-if="pokemonListIsLoading === 'loading'">Pokemons loading ...</div>
          <PokemonList v-if="pokemonListIsLoading === 'loaded'" :pokemonList="this.pokemonsOfType"></PokemonList>
        </div>
      </div>
    </div>
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
      selectedTypeName: '',
      typeInfos: [],
      typeInfosAreLoading: 'standby'
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
      this.typeInfosAreLoading = "loading";
      this.pokemonListIsLoading = "loading";
      const response = await axios.get(`https://pokeapi.co/api/v2/type/${tagName}`);
      this.typeInfos = response.data;
      console.log(this.typeInfos)
      this.typeInfosAreLoading = "loaded";
      for (const pokemon of response.data.pokemon) {
        const response = await axios.get(pokemon.pokemon.url);
        pokemon.id = response.data.id;
        pokemon.name = pokemon.pokemon.name;
      }

      this.pokemonsOfType = response.data.pokemon.filter(pokemon => pokemon.id <= 905)
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

#types-page .pokemon-grid-item {
  width: 40%;
}

@media screen and (max-width: 750px) {
  #types-page .pokemon-grid-item {
    width: 44%;
  }
}

#types-page h4 {
  color: lightgrey;
  padding-bottom: 0.7rem;
}
</style>