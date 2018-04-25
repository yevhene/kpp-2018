export const SEARCH_POKEMONS = 'SEARCH_POKEMONS'

export const search = (q) => {
  return {
    type: SEARCH_POKEMONS,
    q
  }
}
