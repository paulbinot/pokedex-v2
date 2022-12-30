<template>
    <Suspense>
        <template #default>
            <!-- <a href="/pokemons/<%= pokemon.id %>"> -->
                <div class="pokemon-grid-item corners">
                    <a :href="`/pokemon/${pokemon.id}`">
                        <div class="pokemon-grid-item__infos">
                        <h2>
                            <span>#{{ pokemon.id }}</span>
                            <p></p>
                            <span>
                            {{ pokemon.name }}
                            </span>
                        </h2>
                        <div class="top-left-corner corner pixel outerpx"></div>
                        <div class="top-right-corner corner pixel outerpx"></div>
                        <div class="bottom-left-corner corner pixel outerpx"></div>
                        <div class="bottom-right-corner corner pixel outerpx"></div>
                        </div>
                        <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" :alt="`${pokemon.name} image`">
                        <!-- <a href="/pokemons/<%= pokemon.id %>"><button>view more</button> </a> -->
                        <a href="/pokemons/<%= pokemon.id %>">view more +</a>
                        <div class="top-left-corner corner pixel outerpx"></div>
                        <div class="top-right-corner corner pixel outerpx"></div>
                        <div class="bottom-left-corner corner pixel outerpx"></div>
                        <div class="bottom-right-corner-hd corner">
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel borderpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel borderpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel borderpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel innerpx"></div>
                        <div class="pixel borderpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel borderpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        <div class="pixel outerpx"></div>
                        </div>
                    </a>
                </div>
                <!-- </a> -->
        </template>
        <template #fallback>
            chargement...
        </template>
    </Suspense>
</template>
  
<script>
export default {
    name: 'Card',
    props: {
        pokemon: Object
    }
}
</script>

<style>

/* ----------POKEMON GRID---------- */

.pokemon-grid {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  justify-content: center;
}

.pokemon-grid-item {
  width: 45%;
  margin: 0.8rem 0.5rem;
  border: 3px solid white;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: rgb(27, 27, 28);
  position: relative;
}

.pokemon-grid-item .innerpx {
  background-color: rgb(27, 27, 28);
}

.pokemon-grid-item a {
  color: yellow;
  font-size: 0.75rem;
  text-decoration: none;
}

.pokemon-grid-item img {
  margin-top: 3rem;
  padding: 1rem;
}

.pokemon-grid-item__infos {
  background-color: blue;
  position: absolute;
  top: -0.5rem;
  left: -0.5rem;
  padding: 0.5rem 0.4rem 0.3rem 0.4rem;
  line-height: 1.3;
  border: 3px solid white;
  width: 95%;

}

.pokemon-grid-item__infos .bottom-right-corner {
  background-color: rgb(27, 27, 28);

}

.pokemon-grid-item h2 {
  font-size: 0.8rem;
}

@media screen and (min-width: 750px) {
  .pokemon-grid-item {
    width: 25%;
    margin: 1.3rem 1rem;
  }
  
}

@media screen and (min-width: 900px) {
  .pokemon-grid-item {
    width: 20%;
    margin: 1.3rem 1rem;
  }
  
}

</style>