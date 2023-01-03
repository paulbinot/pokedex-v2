
  <template>
        <Suspense>
        <template #default>
            <PokemonList></PokemonList>
        </template>
        <template #fallback>
            <p>Chargement ...</p>
        </template>
    </Suspense>

  </template>

<script>
import PokemonList from '@/components/PokemonList.vue';

export default {
  name: "PokedexView",
  components: { PokemonList }
}

// async function test() {
//   console.log(await getAllPokemons())
// }

// test()
</script>

<style>

</style>
