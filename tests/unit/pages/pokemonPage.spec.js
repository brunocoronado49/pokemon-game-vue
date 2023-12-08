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

    test('should show the components of pokemonPicture and pokemonOptions', () => {
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

        const pokePic = wrapper.find('pokemon-picture-stub')
        const pokeOpt = wrapper.find('pokemon-options-stub')
        expect(pokePic.exists()).toBeTruthy()
        expect(pokeOpt.exists()).toBeTruthy()
        expect(pokePic.attributes('pokemonid')).toBe('1')
        expect(pokeOpt.attributes('pokemons')).toBeFalsy()
    })

    test('checkAnswer tests', async () => {
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

        console.log(wrapper.vm)
        await wrapper.vm.checkAnswer(1)
        expect(wrapper.find('h2').exists()).toBeTruthy()
        expect(wrapper.vm.showPokemon).toBeTruthy()
    })
})

