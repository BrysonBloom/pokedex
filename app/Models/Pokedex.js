export class Pokedex {
  constructor(data) {
    this.name = data.name
    this.id = data.id
    this.types = data.types
    this.weight = data.weight
    this.height = data.height
    this.sprites = data.sprites.front_default

  }

  get nameCard() {
    return `${this.name}`
  }

  get activePokemonCard() {
    let poketypes = ''
    if (this.types[1]) {
      poketypes = JSON.stringify(this.types[0].type.name) + JSON.stringify(this.types[1].type.name)
    }
    else { poketypes = JSON.stringify(this.types[0].type.name) }



    return /*html */`
        <div class="card my-4 bg-danger">
          <div class="card-body border border-5 rounded text-center fw-bold fs-3 border-danger bg-light"
            id="name-card">${this.name}
          </div>
          <img src="${this.sprites
      }" alt="">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-6">height: ${this.height}</div>
                <div class="col-6">weight: ${this.weight}</div>
                <div class="col-6">Types: ${poketypes}</div>
              </div>
              <div class="row ">
                <div class="col-12 d-flex justify-content-end">
                  <button class="btn btn-danger">Catch</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
  }

  static pokemon(pokemon) {
    return /*html */`<div class="border border-3" onclick="app.pokedexController.getActivePokemon('${pokemon.name}')">${pokemon.name}</div>`
  }

}

