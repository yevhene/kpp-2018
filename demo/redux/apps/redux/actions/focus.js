export const FOCUS_POKEMON = 'FOCUS_POKEMON'

export const focus = (pokemon) => {
  return {
    type: FOCUS_POKEMON,
    pokemon
  }
}
