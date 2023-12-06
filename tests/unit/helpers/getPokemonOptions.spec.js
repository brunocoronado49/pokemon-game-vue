import getPokemonOptions, { getPokemons, getPokemonNames } from '@/helpers/getPokemonOptions'

describe('getPokemonOptionsHelper', () => {
    test('should return a number array', () => {
        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
    })

    test('should return array of 4 elements with names', async () => {
        const pokemonsNames = await getPokemonNames([1, 2, 3, 4])
        const pokemons = [
            { name: 'bulbasaur', id: 1 },
            { name: 'ivysaur', id: 2 },
            { name: 'venusaur', id: 3 },
            { name: 'charmander', id: 4 }
        ]

        expect(pokemonsNames).toStrictEqual(pokemons)
    })

    test('getPokemonoptions should return a random array', async () => {
        const pokemons = await getPokemonOptions()
        expect(pokemons.length).toBe(4)
        expect(pokemons).toEqual([
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
            { name: expect.any(String), id: expect.any(Number) },
        ])
    })
})
