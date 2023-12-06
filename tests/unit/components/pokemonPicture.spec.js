import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture test', () => {
    test('should do match with the snapshot', () => {
        // Pide props que se envian al componente
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 1,
                showPokemon: false
            }
        })
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('should show the hidden image and pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: false
            }
        })

        const [ img1, img2 ] = wrapper.findAll('img')
        const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg'
        expect(img1.exists()).toBeTruthy()
        expect(img2).toBe(undefined)
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        expect(img1.attributes('src')).toBe(url)
    })

    test('should show the pokemon if showPokemon:true', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonId: 100,
                showPokemon: true
            }
        })

        const img1 = wrapper.find('img')
        expect(img1.exists()).toBeTruthy()
        expect(img1.classes('hidden-pokemon')).toBeFalsy()
        expect(img1.classes('fade-in')).toBeTruthy()
    })
})

