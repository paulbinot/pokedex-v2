<template>
  <div id="types-page">
    <h1>All types :</h1>
    <div v-if="typeListIsLoading">Types list loading...</div>
    <TypesList v-else :typesList="this.typesList"></TypesList>
    <Separator></Separator>
    <div class="pokemon-infos">
      <div class="top">  
        <div class="top-left">
          <div class="sticky">
            <p v-if="typeInfosAreLoading === 'loading'"></p>
            <div class="pokemons-infos__container border corners">
              <h2>Pokemons of type : <span style="color: yellow;">Please select a type</span></h2>
            <Corners></Corners>
            </div>
          </div>
        </div>
        <div class="bottom-right">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TypesList from '@/components/TypesList.vue';
// import axios from 'axios';
import PokemonList from '@/components/PokemonList.vue';
import { getAllTypes } from '@/service/database';
import Separator from '@/components/Separator.vue';
import Corners from '@/components/Corners.vue';

export default {
  name: "TypesView",
  components: { TypesList, PokemonList, Separator, Corners },
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
      this.typesList = await getAllTypes();
      this.typeListIsLoading = false;
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