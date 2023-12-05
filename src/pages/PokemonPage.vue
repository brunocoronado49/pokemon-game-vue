<template>
<h1>Who is this Pokemon?</h1>
<PokemonPicture :pokemonId="5" :showPokemon="false" />
<PokemonOptions />
</template>

<script>
import PokemonOptions from '@/components/PokemonOptions'
import PokemonPicture from '@/components/PokemonPicture'
import getPokemonOptions from '@/helpers/getPokemonOptions'

console.log(getPokemonOptions())

export default {
    name: 'PokemonPage',
    components: {
        PokemonOptions,
        PokemonPicture
   }
}
</script>
