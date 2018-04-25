const search = (pokemons, q) => {
  const regexp = new RegExp(`.*${q || ''}.*`, 'i')

  return pokemons.filter(pokemon => pokemon.name.match(regexp))
}

export default search
