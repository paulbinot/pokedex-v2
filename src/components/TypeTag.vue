<template>
  <div class="type border corners" v-bind:style="{color: variation, borderColor: variation}">
    {{ oneType }}<div class="top-left-corner corner pixel outerpx"></div>
    <div class="top-right-corner corner pixel outerpx"></div>
    <div class="bottom-left-corner corner pixel outerpx"></div>
    <div class="bottom-right-corner corner pixel outerpx"></div>
  </div>
</template>

<script>

export default {
  name: "TypeTag",
  props: {
    oneType: String
  },
  computed: {
    variation: function() {
      if (this.oneType === "grass") {
        return "#38bf4b"
      } else if (this.oneType === "poison") {
        return "#b667cf"
      } else if (this.oneType === "bug") {
        return "#84c400"
      } else if (this.oneType === "normal") {
        return "#919aa2"
      } else if (this.oneType === "fighting") {
        return "#dc7a25"
      } else if (this.oneType === "flying") {
        return "#8aace4"
      } else if (this.oneType === "ground") {
        return "#e97333"
      } else if (this.oneType === "rock") {
        return "#c9b787"
      } else if (this.oneType === "ghost") {
        return "#4b6ab3"
      } else if (this.oneType === "steel") {
        return "#4b6ab3"
      } else if (this.oneType === "fire") {
        return "#ff9741"
      } else if (this.oneType === "water") {
        return "#3393dd"
      } else if (this.oneType === "electric") {
        return "#f3ca00"
      } else if (this.oneType === "psychic") {
        return "#f76371"
      } else if (this.oneType === "ice") {
        return "#4acaba"
      } else if (this.oneType === "dragon") {
        return "#006cc3"
      } else if (this.oneType === "dark") {
        return "#006cc3"
      } else if (this.oneType === "fairy") {
        return "#f385e4"
      }
    }
  }
}
</script>