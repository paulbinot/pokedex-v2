<template>
  <div>
    <template v-if="isloading">Chargement...</template>

    <template v-else>
      <div class="pokemon-infos">
        <div class="top">
          <div class="top-left">
            <div class="sticky">
              <h1>
                #{{ pokemon.id }} {{ pokemon.name }}
              </h1>
              <div class="pokemons-infos__image border corners">
                <img :src="pokemon.sprites.front_default" :alt="`${pokemon.name} image`">
    
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
              </div>
            </div>
          </div>
          <div class="bottom-right">
            <div class="pokemons-infos__container border corners">
              <h2>> type(s) :</h2>
              <div class="pokemons-infos__types">
                <TypeTag v-for="oneType of pokemon.types" :key="oneType.slot" :oneType="oneType.type.name" />
              </div>
    
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
            </div>
            <div class="pokemons-infos__container border corners">
              <h4>> {{ pokemonSpecies.text }}</h4>
    
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
            </div>
            <div class="pokemons-infos__container border corners">
              <h2>> Stats :</h2>
              <div class="pokemons-infos__base">
                <div class="left">
                  <h4 class="hp">HP</h4>
                  <h4>Attack</h4>
                  <h4>Defense</h4>
                  <h4>Sp. Attack</h4>
                  <h4>Sp. Defense</h4>
                  <h4>Speed</h4>
                </div>
                <div class="right">
                  <p class="hp">{{ pokemon.stats[0].base_stat }}</p>
                  <p>{{ pokemon.stats[1].base_stat }}</p>
                  <p>{{ pokemon.stats[2].base_stat }}</p>
                  <p>{{ pokemon.stats[3].base_stat }}</p>
                  <p>{{ pokemon.stats[4].base_stat }}</p>
                  <p>{{ pokemon.stats[5].base_stat }}</p>
                </div>
              </div>
    
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
            </div>
    
            <div class="btns">
              <a v-if="pokemon.id === 1" style="visibility: hidden">
                <span>◄ </span>
                <p> Previous</p>
              </a>
    
              <a v-if="pokemon.id !== 1" @click="updatePokemon(pokemon.id - 1)">
                <span>◄ </span>
                <p> Previous</p>
              </a>
    
              <a v-if="pokemon.id === 905" style="visibility: hidden">
                <p>Next</p><span>►</span>
              </a>
    
              <a v-if="pokemon.id !== 905" @click="updatePokemon(pokemon.id + 1)">
                <p>Next</p><span>►</span>
              </a>
            </div>
    
            <div class="pokemons-infos__container border corners">
              <h2>> potentials abilities :</h2>
    
              <AbilitiesList :abilities="pokemon.abilities"></AbilitiesList>
    
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
            </div>
            <div class="pokemons-infos__image border corners">
              <img :src="pokemon.sprites.front_shiny" :alt="`${pokemon.name} image`">
              <div class="legend">=> Shiny</div>
    
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
            </div>
            <div class="pokemons-infos__container border corners">
              <h2>> More infos :</h2>
              <Separator></Separator>
              <h3>/ Name in other languages :</h3>
              <div class="pokemons-infos__base">
                <div class="left">
                  <h4>Japanese</h4>
                  <h4>French</h4>
                  <h4>Italian</h4>
                  <h4>Spanish</h4>
                  <h4>German</h4>
                  <h4>Korean</h4>
                </div>
                <div class="right">
                  <p>{{ pokemonSpecies.names[9].name }}</p>
                  <p>{{ pokemonSpecies.names[4].name }}</p>
                  <p>{{ pokemonSpecies.names[7].name }}</p>
                  <p>{{ pokemonSpecies.names[6].name }}</p>
                  <p>{{ pokemonSpecies.names[5].name }}</p>
                  <p>{{ pokemonSpecies.names[2].name }}</p>
                </div>
              </div>
              <Separator></Separator>
    
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
            </div>
            <!-- female-->
            <div class="pokemons-infos__image border corners" v-if="pokemon.sprites.front_female">
              <img :src="pokemon.sprites.front_shiny" :alt="`${pokemon.name} image`">
              <div class="legend">=> Female</div>
    
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
            </div>
    
            <!-- female shiny-->
            <div class="pokemons-infos__image border corners" v-if="pokemon.sprites.front_shiny_female">
              <img :src="pokemon.sprites.front_shiny" :alt="`${pokemon.name} image`">
              <div class="legend">=> Shiny female</div>
    
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
            </div>
    
          </div>
        </div>
        <div class="bottom">
    
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import TypeTag from '@/components/TypeTag.vue';
import AbilitiesList from '@/components/AbilitiesList.vue';
import Separator from '@/components/Separator.vue';

export default {
  name: 'PokemonView',
  components: { TypeTag, AbilitiesList, Separator },
  props: {
    id: {
      // type: Number,
      required: true
    }
  },
  data() {
    return {
      pokemon: {},
      pokemonSpecies: {},
      pokemonEvolutionChain: {},
      isloading: true
    }
  },
  created() {
    this.fetchPokemon(this.id)
  },
  methods: {
    async fetchPokemon(id) {
      try {
        const response1 = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const response2 = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
        if (response2.data.evolution_chain) {
          const response3 = await axios.get(response2.data.evolution_chain.url);
          this.pokemonEvolutionChain = response3.data;
        }

        const flavorTextEntries = response2.data.flavor_text_entries.filter(enEntries => enEntries.language.name === "en")
        response2.data.text = flavorTextEntries[flavorTextEntries.length - 1].flavor_text;

        this.pokemon = response1.data;
        this.pokemonSpecies = response2.data;
        this.isloading = false;
      } catch (error) {
        console.error(error)
      }
    },
    updatePokemon(pokemonId) {
      this.isloading = true;
      this.fetchPokemon(pokemonId);
      this.$router.push({ name: 'PokemonView', params: { id: pokemonId } });

    }
  }
}
</script>

<style>
/* ----------POKEMON PAGE----------

.pokemon-infos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pokemon-infos .top-left,
.bottom-right {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.pokemon-infos .top {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pokemons-infos__image {
  background-color: rgb(27, 27, 28);
}

.pokemons-infos__image .innerpx {
  background-color: rgb(27, 27, 28);
}

.pokemon-infos h1 {
  font-size: 2rem;
  line-height: 1.4;
  margin: 0.5rem 0;
}

.pokemon-infos h2 {
  font-size: 1.2rem;
  line-height: 1.5;
}

.pokemon-infos h3 {
  line-height: 1.4;
}

.pokemons-infos__types {
  display: flex;
  flex-wrap: wrap;
}

.pokemons-infos__types .type {
  padding: 0.7rem;
  background-color: #fff;
  gap: 0.7rem;
}

.pokemons-infos__container {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pokemons-infos__base {
  display: flex;
  justify-content: space-between;
}

.pokemons-infos__base .left,
.right {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.pokemons-infos__base .left {
  color: lightgray;
}

.pokemons-infos__base .right {
  color: yellow;
  text-align: right;
}

.pokemons-infos__base .hp {
  font-size: 150%;
}

.btns {
  display: flex;
  justify-content: space-between;
  padding: 0 0.7rem;
}

.btns a {
  display: flex;
  color: yellow;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
}

.btns a span {
  transform: translateY(-5px);
}

.legend {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
}


@media screen and (min-width: 750px) {
  .pokemon-infos .top {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }

  .pokemon-infos .top-left {
    width: 50%;
  }

  .pokemon-infos .bottom-right {
    width: 50%;
  }

  .sticky {
    position: sticky;
    top: 1rem;
  }

} */
</style>