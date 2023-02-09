import { appState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";
import { pokedexApi } from "./AxiosService.js"

class PokedexService {
    async getPokedex() {
        const res = await pokedexApi.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
        console.log(res.data);
        appState.pokemon = res.data.results
        console.log(appState.pokemon);
    }

    async getActivePokemon(name) {
        const res = await pokedexApi.get('https://pokeapi.co/api/v2/pokemon/' + name)
        // console.log('test', res.data);
        appState.activePokemon = new Pokedex(res.data)
    }

    setActivePokemon() {
        let foundPokemon = appState.pokemon
    }
}

export const pokedexService = new PokedexService