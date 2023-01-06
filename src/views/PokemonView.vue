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
              <Separator></Separator>
              <div class="pokemons-infos__base">
                <div class="left">
                  <h4>Base happiness</h4>
                  <h4>Capture rate</h4>
                </div>
                <div class="right">
                  <p>{{ pokemonSpecies.base_happiness }}</p>
                  <p>{{ pokemonSpecies.capture_rate }}</p>
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
              <div class="pokemons-infos__base">
                <div class="left">
                  <h4>Avg. height</h4>
                  <h4>Avg. weight</h4>
                  <h4>Color</h4>
                  <h4>Shape</h4>
                </div>
                <div class="right">
                  <p>{{ pokemon.height }}0 cm</p>
                  <p>{{ pokemon.weight }} kg</p>
                  <p>{{ pokemonSpecies.color.name }}</p>
                  <p>{{ pokemonSpecies.shape.name }}</p>
                </div>
              </div>
              <Separator></Separator>
              <div class="pokemons-infos__base">
                <div class="left">
                  <h4>Legendary</h4>
                  <h4>Mythical</h4>
                </div>
                <div class="right">
                  <p v-if="pokemonSpecies.is_legendary">yes</p><p v-else>no</p>
                  <p v-if="pokemonSpecies.is_mythical">yes</p><p v-else>no</p>
                </div>
              </div>
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
import TypeTag from '@/components/TypeTag.vue';
import AbilitiesList from '@/components/AbilitiesList.vue';
import Separator from '@/components/Separator.vue';
import { getPokemonById, getPokemonSpeciesById, getEvolutionChainById  } from '@/service/database';

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
        this.pokemon = await getPokemonById(id);
        this.pokemonSpecies = await getPokemonSpeciesById(id);

        if (this.pokemonSpecies.evolution_chain) {
          this.pokemonEvolutionChain = await getEvolutionChainById(this.pokemonSpecies.evolution_chain.url);
        }

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

</style>