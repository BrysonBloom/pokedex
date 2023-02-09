import { appState } from "../AppState.js";
import { Pokedex } from "../Models/Pokedex.js";
import { pokedexService } from "../Services/PokedexService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawPokemons() {
    let pokemon = appState.pokemon
    let template = ''
    pokemon.forEach(pokemon => template += Pokedex.pokemon(pokemon))
    setHTML('pokemon-cards', template)
}

function _drawActivePokemon() {
    let pokemon = appState.activePokemon
    if (appState.activePokemon) {
        setHTML('active-pokemon', pokemon.activePokemonCard)
        console.log(appState.activePokemon);
    }
}

export class PokedexController {

    constructor() {
        this.getPokedex()
        appState.on('activePokemon', _drawActivePokemon)
        appState.on('pokemon', _drawPokemons)
    }
    async getPokedex() {
        try {
            await pokedexService.getPokedex()
        } catch (error) {
            Pop.error(error)
        }
    }

    async getActivePokemon(name) {
        try {
            await pokedexService.getActivePokemon(name)
            // console.log('await worked');
        } catch (error) {
            Pop.error(error)
        }
    }

    setActivePokemon() {
        let pokemon = appState.activePokemon

    }

}