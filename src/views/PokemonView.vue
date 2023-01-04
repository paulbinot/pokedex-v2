<template>
  <div class="pokemon-infos">
    <div class="top">
      <div class="top-left">
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
          <h2>> Stats :</h2>
          <div class="pokemons-infos__base">
            <div class="left">
              <h3 class="hp">HP</h3>
              <h3>Attack</h3>
              <h3>Defense</h3>
              <h3>Sp. Attack</h3>
              <h3>Sp. Defense</h3>
              <h3>Speed</h3>
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

        <div class="pokemons-infos__container">
          <div class="btns">
            <a v-if="pokemon.id === 1"
              style="visibility: hidden">
              <span>◄ </span>
              <p> Previous</p>
            </a>

            <a v-if="pokemon.id !== 1" @click="updatePokemon(pokemon.id - 1)" >
              <span>◄ </span>
              <p> Previous</p>
            </a>

            <a v-if="pokemon.id === 905"
              style="visibility: hidden">
              <p>Next</p><span>►</span>
            </a>

            <a v-if="pokemon.id !== 905" @click="updatePokemon(pokemon.id + 1)">
              <p>Next</p><span>►</span>
            </a>
          </div>
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
        <div class="pokemons-infos__container border corners">
          <h2>> More infos :</h2>
          <h3>Name in other languages :</h3>
          <div class="pokemons-infos__base">
            <div class="left">
              <h4>japanese</h4>
              <h4>chinese</h4>
              <h4>french</h4>
            </div>
            <div class="right">
              <p>
                ching
              </p>
              <p>
                chang
              </p>
              <p>
                baguette
              </p>
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

      </div>
    </div>
    <div class="bottom">

    </div>
  </div>
</template>

<script>
import axios from 'axios';
import TypeTag from '@/components/TypeTag.vue';
import AbilitiesList from '@/components/AbilitiesList.vue';

export default {
  name: 'PokemonView',
  components: { TypeTag, AbilitiesList },
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
      pokemonEvolutionChain: {}
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
        const response3 = await axios.get(response2.data.evolution_chain.url);

        console.log(response1.data)
        // console.log(response2.data)
        // console.log(response3.data)
        this.pokemon = response1.data;
        this.pokemonSpecies = response2.data;
        this.pokemonEvolutionChain = response3.data;
      } catch (error) {
        console.error(error)
      }
    },
    updatePokemon(pokemonId) {
      this.fetchPokemon(pokemonId);
      this.$router.push({name: 'PokemonView', params: { id: pokemonId }});

    }
  }
}
</script>

<style>
/* ----------POKEMON PAGE---------- */

.pokemon-infos {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.pokemon-infos .top-left,
.bottom-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
}

.pokemons-infos__types {
  display: flex;
  flex-wrap: wrap;
}

.pokemons-infos__types .type {
  padding: 0.7rem;
  background-color: #fff;
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


@media screen and (min-width: 750px) {
  .pokemon-infos .top {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }

  .pokemon-infos .top-left {
    width: 55%;
  }

  .pokemon-infos .bottom-right {
    width: 45%;
  }

}
</style>