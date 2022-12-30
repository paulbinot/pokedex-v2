<template>
  <header>
    <img src="/images/Pokédex_logo.png" alt="pokedex logo" class="logo">
  </header>
  <nav>
    <router-link to="/">Pokedex</router-link>
    |
    <router-link to="/types">Types</router-link>
    |
    <router-link to="/types">Moves</router-link>
  </nav>
  <router-view/>
</template>

<style>
/* reset */
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}*{box-sizing:border-box}

#app {
  font-family: 'Press start 2P';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: white;
  padding: 1rem;
}

header {
  text-align: center;
}

img {
  max-width: 100%;
  image-rendering: pixelated;
}

body {
  background-color: blue;
  margin: 0 auto;
  max-width: 1200px;
}

.logo {
  padding: 1rem;
}

nav {
  margin: 1rem 0 2rem 0;
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

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
</style>
