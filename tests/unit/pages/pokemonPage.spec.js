import { shallowMount, mount } from '@vue/test-utils'
import PokemonPage from '@/pages/PokemonPage'

import { pokemonsMock } from '../mocks/pokemons.mock'

describe('PokemonPage test', () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage)
    })

    test('should do match woth the snaopshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should call mixPokemonArr in the mount', () => {
        const mixPokemonArrSpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
        const wrapper = shallowMount(PokemonPage)
        expect(mixPokemonArrSpy).toHaveBeenCalled()
    })

    test('should match with snapshot when pokemons are loaded', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemonArr: [],
                    pokemon: pokemonsMock[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        })

        expect(wrapper.html()).toMatchSnapshot()
    })
})

