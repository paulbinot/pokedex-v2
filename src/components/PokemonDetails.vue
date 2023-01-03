
    <template>
      <div class="page-container">
        <div class="pokemon-infos">
          <div class="top">
            <div class="top-left">
              <h1>
                #{{ pokemonDetails.id }} {{ pokemonDetails.name }}
              </h1>
              <div class="pokemons-infos__image border corners">
                <img
                  :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetails.id}.png`"
                  :alt="`${pokemonDetails.name} image`">

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
                  <TypeTag v-for="oneType of pokemonDetails.types" :key="oneType.slot" :oneType="oneType.type.name" />
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
                <h2>> Base :</h2>
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
                    <p class="hp">{{ pokemonDetails.stats[0].base_stat }}</p>
                    <p>{{ pokemonDetails.stats[1].base_stat }}</p>
                    <p>{{ pokemonDetails.stats[2].base_stat }}</p>
                    <p>{{ pokemonDetails.stats[3].base_stat }}</p>
                    <p>{{ pokemonDetails.stats[4].base_stat }}</p>
                    <p>{{ pokemonDetails.stats[5].base_stat }}</p>
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
                  <router-link v-if="pokemonDetails.id === 1" :to="`/pokemon/${pokemonDetails.id - 1}`"
                    style="visibility: hidden">
                    <span>◄ </span>
                    <p> Previous</p>
                  </router-link>

                  <router-link v-if="pokemonDetails.id !== 1" :to="`/pokemon/${pokemonDetails.id - 1}`">
                    <span>◄ </span>
                    <p> Previous</p>
                  </router-link>

                  <router-link v-if="pokemonDetails.id === 905" :to="`/pokemon/${pokemonDetails.id + 1}`"
                    style="visibility: hidden">
                    <p>Next</p><span>►</span>
                  </router-link>

                  <router-link v-if="pokemonDetails.id !== 905" :to="`/pokemon/${pokemonDetails.id + 1}`">
                    <p>Next</p><span>►</span>
                  </router-link>
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
      </div>
    </template>

  
<script>
import { getPokemonDetails } from '@/service/database';
import TypeTag from '@/components/TypeTag.vue';

export default {
  name: "PokemonDetails",
  components: { TypeTag },
  data() {
    return {
      id: this.$route.params.id,
      pokemonDetails: Object
    }
  },
  async asyncData({ params, error }) {
    try {
      // Appelez votre API ici en utilisant `axios` ou un autre moyen de faire des requêtes HTTP
      const response = await getPokemonDetails(this.id)
      return { pokemonDetails }
    } catch (e) {
      error({ message: 'An error occurred while fetching data', statusCode: 404 })
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
  padding: 2rem;
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
  margin-right: 1rem;
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