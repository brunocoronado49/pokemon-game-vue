import pokemonApi from '@/api/pokemonApi'

describe('pokemonApi test', () => {
    test('Axios should be configured with pokeapi url', () => {
        expect(pokemonApi.defaults.baseURL)
            .toBe('https://pokeapi.co/api/v2/pokemon')
    })
})

