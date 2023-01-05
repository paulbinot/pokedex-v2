<template>
  <div class="pokemons-infos__types">
    <TypeTag v-for="oneType of typesList" :key="oneType" :oneType="oneType.name" @click="selectedType(oneType.name)" />
  </div>
</template>
    
<script>
import TypeTag from '@/components/TypeTag.vue';

export default {
  name: "TypesList",
  props: {
    typesList: {
      type: Array,
      required: true
    }
  },
  components: { TypeTag },
  methods: {
    selectedType(tagName) {
      this.$emit("select", tagName);
    }
  }
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
  cursor: pointer;
}
</style>