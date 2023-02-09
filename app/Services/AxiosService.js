export const pokedexApi = axios.create({
    baseURL: '',
    timeout: 2500
})

export const sandboxApi = axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/Bbloom666/pokemon/',
    timeout: 5000
})