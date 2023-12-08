import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';

import { pokemonsMock } from '../mocks/pokemons.mock';

describe('PokemonOptions test', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
        props: {
            pokemons: pokemonsMock,
        },
        });
    });

    test('should be match with the snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('should show the 4 options correctly', () => {
        const liTags = wrapper.findAll('li')
        expect(liTags.length).toBe(4)

        for (let poke = 0; poke < pokemonsMock.length; poke++) {
            expect(liTags[poke].text()).toBe(pokemonsMock[poke].name)
        }

    });

    test('should emit `selection` with his respective params to do click', () => {
        const [ l1, _, __, ___  ] = wrapper.findAll('li')
        l1.trigger('click')

        expect(wrapper.emitted('selection').length).toBe(1)
        expect(wrapper.emitted('selection')[0]).toEqual([1])
    });
});
