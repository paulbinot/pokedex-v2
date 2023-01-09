<template>
  <div id="types-page">
    <h1>All types :</h1>
    <div v-if="typeListIsLoading">Types list loading...</div>
    <TypesList v-else :typesList="this.typesList" @select="fetchPokemons"></TypesList>
    <Separator></Separator>
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
                <Separator></Separator>
                <h4>Double damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.double_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <Separator></Separator>
                <h4>Double damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.double_damage_to" :key="oneType">=> {{ oneType.name }}</p>
                <Separator></Separator>
                <h4>Half damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.half_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <Separator></Separator>
                <h4>Half damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.half_damage_to" :key="oneType">=> {{ oneType.name }}</p>
                <Separator></Separator>
                <h4>No damage <span style="color: red;">FROM</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.no_damage_from" :key="oneType">=> {{ oneType.name }}</p>
                <Separator></Separator>
                <h4>No damage <span style="color: green;">TO</span> :</h4>
                <p v-for="oneType in typeInfos.damage_relations.no_damage_to" :key="oneType">=> {{ oneType.name }}</p>
              </div>
              <Corners></Corners>
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
// import axios from 'axios';
import PokemonList from '@/components/PokemonList.vue';
import { getAllTypes, getTypeInfos, getPokemonsOfOneType } from '@/service/database';
import Separator from '@/components/Separator.vue';
import Corners from '@/components/Corners.vue';

export default {
  name: "TypeDetailsView",
  components: { TypesList, PokemonList, Separator, Corners },
  data() {
    return {
      typesList: [],
      typeListIsLoading: true,
      pokemonsOfType: [],
      pokemonListIsLoading: 'standby',
      selectedTypeName: this.$route.params.name,
      typeInfos: [],
      typeInfosAreLoading: 'standby'
    }
  },
  created() {
    this.fetchPokemonTypes();
    this.fetchPokemons(this.selectedTypeName);
  },
  methods: {
    async fetchPokemonTypes() {
      this.typesList = await getAllTypes();
      this.typeListIsLoading = false;
    },
    async fetchPokemons(tagName) {
      // Check
      if ( this.pokemonListIsLoading === "loading") {
        return
      }

      // Name update for the page render
      this.selectedTypeName = tagName;

      // Loading variables
      this.typeInfosAreLoading = "loading";
      this.pokemonListIsLoading = "loading";

      // first api call for type infos
      this.typeInfos = await getTypeInfos(tagName);
      this.typeInfosAreLoading = "loaded";

      // Second API call (because this call is so long) for type pokemons
      this.pokemonsOfType = await getPokemonsOfOneType(tagName);
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