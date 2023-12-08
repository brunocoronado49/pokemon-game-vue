<template>
<div v-if="!pokemon">
    <h1>Cargando...</h1>
</div>

<div v-else>
    <h1>¿Quién es este Pokémon?</h1>
    <PokemonPicture 
        :pokemon-id="pokemon.id"
        :show-pokemon="showPokemon" />
    <PokemonOptions 
        :pokemons="pokemonArr" 
        @selection="checkAnswer"/>

    <template v-if="showAnswer">
        <h2 class="fade-in">{{ message }}</h2>
        <button @click="newGame" class="btnNewGame">Nuevo Juego</button>
    </template>
</div>
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
    name: 'PokemonPage',
    components: { PokemonOptions, PokemonPicture },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false,
            showAnswer: false,
            message: ''
        }
    },
    methods: {
        async mixPokemonArray() {
            this.pokemonArr = await getPokemonOptions()
            const rdmInt = Math.floor(Math.random() * 4)
            
            this.pokemon = this.pokemonArr[rdmInt]
        },
        checkAnswer(pokemonId) {
            this.showPokemon = true
            this.showAnswer = true
            if(pokemonId === this.pokemon.id) {
                this.message = `Correcto, adivinaste es ${this.pokemon.name}!`
            } else {
                this.message = `Oops! Te equivocaste, es ${this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false
            this.showAnswer = false
            this.pokemonArr = []
            this.pokemon = null
            this.mixPokemonArray()
        }
    },
    mounted() {
        this.mixPokemonArray()
    }
}
</script>
 
 <style scoped>
 .btnNewGame {
    padding: 20px;
    border: none;
    background: rgb(214, 90, 90);
    color: white;
    border-radius: 8px;
    font-size: 17px;
 }
 .btnNewGame:hover {
    cursor: pointer;
    background: rgb(180, 52, 52);
    animation: ease-in;
    animation-delay: 1s;
 }
 </style>