<template>
  <div class="pokemon-grid">
    <Card v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: "PokemonList",
  components: {
    Card
  },
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>

</style>