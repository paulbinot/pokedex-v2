<template>
  <div class="pokemons-infos__types">
    <TypeTag v-for="oneType of allTypes.results" :key="oneType" :oneType="oneType.name" />
  </div>
</template>
    
<script>
import { getAllTypes } from '@/service/database';
import TypeTag from '@/components/TypeTag.vue';

export default {
  name: "TypesList",
  // props: {
  //   pokemonDetails: Object
  // },
  components: { TypeTag },
  async setup() {
    const allTypes = await getAllTypes();
    return {
      allTypes
    };
  },
};
</script>
  
<style>
.pokemons-infos__types {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.pokemons-infos__types .type {
  padding: 0.7rem;
  background-color: #fff;
  color: blue;
}
</style>