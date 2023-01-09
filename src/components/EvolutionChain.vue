<template>
  <div class="evolution_chain">
    <Card v-for="pokemon in pokemonList" :key="pokemon.id" :pokemon="pokemon" style="width: 100%;" />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  name: "EvolutionChain",
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

<style scoped>
.evolution_chain {
  display: flex;
  flex-wrap: wrap;
  overflow-x: scroll;
}
</style>