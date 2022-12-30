<template>
    <div class="pokemon-grid">
      <Card
      v-for="pokemon of pokemonList"
      :key="pokemon.id"
      :pokemon="pokemon"/>
    </div>
</template>

<script>
  import Card from '@/components/Card.vue';
  import { getAllPokemons } from '@/service/database';

  export default {
    name: "PokemonList",
    components: {
      Card
    },
    async setup() {
      const pokemonList = await getAllPokemons();
      return { 
      pokemonList
      };
    }
  }
</script>

<style>
</style>