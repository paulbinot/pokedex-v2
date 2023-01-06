"use strict";(self["webpackChunkpokedex_v2"]=self["webpackChunkpokedex_v2"]||[]).push([[154],{7809:function(e,o,n){n.d(o,{Z:function(){return j}});var i=n(3396);const s={class:"pokemon-grid"};function r(e,o,n,r,l,p){const t=(0,i.up)("Card");return(0,i.wg)(),(0,i.iD)("div",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.pokemonList,(e=>((0,i.wg)(),(0,i.j4)(t,{key:e.id,pokemon:e},null,8,["pokemon"])))),128))])}var l=n(7139);const p={class:"pokemon-grid-item corners"},t={class:"pokemon-grid-item__infos"},c=(0,i._)("p",null,null,-1),a=(0,i._)("div",{class:"top-left-corner corner pixel outerpx"},null,-1),d=(0,i._)("div",{class:"top-right-corner corner pixel outerpx"},null,-1),x=(0,i._)("div",{class:"bottom-left-corner corner pixel outerpx"},null,-1),u=(0,i._)("div",{class:"bottom-right-corner corner pixel outerpx"},null,-1),m=["src","alt"],v=(0,i._)("a",{href:"/pokemons/<%= pokemon.id %>"},"view more +",-1),_=(0,i._)("div",{class:"top-left-corner corner pixel outerpx"},null,-1),k=(0,i._)("div",{class:"top-right-corner corner pixel outerpx"},null,-1),g=(0,i._)("div",{class:"bottom-left-corner corner pixel outerpx"},null,-1),f=(0,i._)("div",{class:"bottom-right-corner-hd corner"},[(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel borderpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel borderpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel borderpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel innerpx"}),(0,i._)("div",{class:"pixel borderpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel borderpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"}),(0,i._)("div",{class:"pixel outerpx"})],-1);function h(e,o,n,s,r,h){const w=(0,i.up)("router-link");return(0,i.wg)(),(0,i.j4)(i.n4,null,{default:(0,i.w5)((()=>[(0,i._)("div",p,[(0,i.Wm)(w,{to:{name:"PokemonView",params:{id:n.pokemon.id}}},{default:(0,i.w5)((()=>[(0,i._)("div",t,[(0,i._)("h2",null,[(0,i._)("span",null," #"+(0,l.zw)(n.pokemon.id),1),c,(0,i._)("span",null,(0,l.zw)(n.pokemon.name),1)]),a,d,x,u]),(0,i._)("img",{src:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n.pokemon.id}.png`,alt:`${n.pokemon.name} image`},null,8,m),v,_,k,g,f])),_:1},8,["to"])])])),fallback:(0,i.w5)((()=>[(0,i.Uk)(" chargement... ")])),_:1})}var w=n(2483),L={name:"Card",props:{pokemon:Object},components:{RouterLink:w.rH}},b=n(89);const P=(0,b.Z)(L,[["render",h]]);var y=P,C={name:"PokemonList",components:{Card:y},props:{pokemonList:{type:Array,required:!0}}};const Z=(0,b.Z)(C,[["render",r]]);var j=Z},9154:function(e,o,n){n.r(o),n.d(o,{default:function(){return d}});var i=n(3396);const s={key:0};function r(e,o,n,r,l,p){const t=(0,i.up)("PokemonList");return(0,i.wg)(),(0,i.iD)("div",null,[l.isLoading?((0,i.wg)(),(0,i.iD)("div",s,"Chargement ...")):((0,i.wg)(),(0,i.j4)(t,{key:1,pokemonList:this.pokemonList},null,8,["pokemonList"]))])}var l=n(7809),p=n(6943),t={name:"PokedexView",components:{PokemonList:l.Z},data(){return{pokemonList:[],isLoading:!0}},created(){this.fetchPokemons()},methods:{async fetchPokemons(){const e=await p.Z.get("https://pokeapi.co/api/v2/pokemon?limit=905&offset=0"),o=e.data.results;for(let n=0;n<o.length;n++)o[n].id=n+1;this.pokemonList=o,console.log(this.pokemonList),this.isLoading=!1}}},c=n(89);const a=(0,c.Z)(t,[["render",r]]);var d=a}}]);
//# sourceMappingURL=154.4a849a03.js.map