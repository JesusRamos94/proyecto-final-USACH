import axios from "axios";


export const searchPokemon = async (pokemon) => {
    try {
        if (pokemon) {
            let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
            const response = await axios(url)
            const { data } = response
            return data
        }
        alert('Ingrese el nombre de su pokemon o su numero')

    }
    catch (error) {

    }
}
export const getPokemons = async (limits = 25, offset = 0) => {
    try {
        let url = `https://pokeapi.co/api/v2/pokemon?limit=${limits}&offset=${offset}`
        const response = await axios(url)
        const { data } = response
        return data

    } catch (error) {

    }
}

export const getPokemonData = async (url) => {
    try {
        const response = await axios(url)
        const { data } = response
        return data

    } catch (error) {

    }
}

