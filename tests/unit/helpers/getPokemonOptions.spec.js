import { getPokemons } from '@/helpers/getPokemonOptions'

describe('getPokemonOptionsHelper', () => {
    test('should return a number array', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
    })

    test('should return array of 4 elements with names', () => {

    })

    test('getPokemonoptions should return a random array', () => {
        
    })
})