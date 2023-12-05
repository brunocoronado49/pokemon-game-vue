<template>
<div class="options-container">
    <ul>
        <li
          v-for="pokemon in pokemons"
          :key="pokemon.id"
          @click="$emit('selection', pokemon.id)">
            {{pokemon.name}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'PokemonOptions',
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: rgb(144, 195, 92);
    border-radius: 8px;
    border: 2px solid rgb(255, 136, 0);
    cursor: pointer;
    margin-bottom: 15px;
    width: 250px;
    height: 50px;
    display: grid;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
}
li:hover {
    background-color: rgb(251, 247, 0, 0.4);
    animation: ease-in-out;
}
.options-container {
    display: flex;
    justify-content: center;
}
</style>
