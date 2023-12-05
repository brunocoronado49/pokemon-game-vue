<template>
<div class="options-container">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'PokemonOptions'
}
</script>

<style scoped>
ul {
    list-style-type: none;
}
li {
    background-color: white;
    border-radius: 8px;
    border: 1px solid rgba(255, 0, 0, 0.2);
    cursor: pointer;
    margin-bottom: 15px;
    width: 250px;
}
li:hover {
    background-color: rgb(251, 247, 0, 0.4);
}
.options-container {
    display: flex;
    justify-content: center;
}
</style>
