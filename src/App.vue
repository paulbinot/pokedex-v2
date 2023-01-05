<template>
  <header>
    <img src="/images/Pokédex_logo.png" alt="pokedex logo" class="logo">
  </header>
  <div class="page-container">
    <div class="separator"></div>
    <nav>
      <router-link to="/">Pokedex</router-link>
      |
      <router-link to="/types">Types</router-link>
      |
      <!-- <router-link to="/moves">Moves</router-link> -->
    </nav>
    <div class="separator"></div>
  </div>
  <div class="page-container">
    <router-view />
  </div>
  <div class="page-container">
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';

export default {
  name: "app",
  components: { Footer }
}
</script>

<style>
/* reset */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block
}

body {
  line-height: 1
}

ol,
ul {
  list-style: none
}

blockquote,
q {
  quotes: none
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

* {
  box-sizing: border-box
}

#app {
  font-family: 'Press start 2P';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  padding: 1rem;
}

header {
  text-align: center;
}

img {
  max-width: 100%;
  width: 100%;
  image-rendering: pixelated;
}

body {
  background-color: blue;
  margin: 0 auto;
  max-width: 1200px;
  line-height: 1.3;
}

.logo {
  padding: 1rem;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: white;
  transition: all 0.2s ease-in-out;
}

nav a:hover {
  color: yellow;
}

nav a.router-link-exact-active {
  color: yellow;
}

.logo {
  max-width: 500px;
}

/* GENERICS */

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.2rem;
}

button {
  border: 3px solid black;
  font-family: 'Press Start 2P', serif;
  padding: 0.5rem;
}

.page-container {
  padding: 1rem;
}

.border {
  border: 3px solid white;
}


/* ----------CORNERS---------- */

.corners {
  position: relative;
}

.corner {
  position: absolute !important;
}

.pixel {
  height: 3px;
  width: 3px;
}

.top-left-corner {
  top: -3px;
  left: -3px;
}

.top-right-corner {
  top: -3px;
  right: -3px;
}

.bottom-left-corner {
  bottom: -3px;
  left: -3px;
}

.bottom-right-corner {
  bottom: -3px;
  right: -3px;
}

.bottom-right-corner-hd {
  bottom: -3px;
  right: -3px;
  width: 15px;
  height: 15px;
  display: flex;
  flex-wrap: wrap;
}

.outerpx {
  background-color: blue;
}

.innerpx {
  background-color: blue;
}

.borderpx {
  background-color: white;
}

/* ----------FOOTER---------- */

footer {
  font-size: 0.75rem;
  color: lightgray;
  line-height: 2.4;
  padding: 1rem;
  border-color: lightgray !important;
  background-color: rgb(27, 27, 28);
}

footer a {
  color: rgb(182, 182, 112);
  text-decoration: none;
}

footer .innerpx {
  background-color: rgb(27, 27, 28);
}

footer .borderpx {
  background-color: lightgray;
}

/* Séparateur */

.separator {
  border-top: 3px dashed white;
  margin: 1rem 0;
}

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

}

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style>
