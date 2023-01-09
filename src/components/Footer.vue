<template>
    <Separator></Separator>
    <footer class="pokemons-infos__container border corners">
      <p>> made with love by <a href="https://www.paulbinot.com" target="_blank">Paul Binot</a></p>
      <p>> Data : © Pokémon Company and its affiliates, API : <a href="https://pokeapi.co/">Pokeapi.co</a></p>
      <Corners></Corners>
    </footer>
</template>

<script>
import Corners from './Corners.vue';
import Separator from './Separator.vue';

export default {
    name: "Footer",
    components: { Separator, Corners }
}
</script>

<style>

</style>