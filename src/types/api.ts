export type PokemonResponseResult = {
  name: string
  url: string
}

export type Stat = {
  base_stat: number
  stat: {
    name: string
  }
}
export type Type = {
  type: {
    name: string
  }
}

export type PokemonResponse = {
  data: {
    count: number
    next: string | null
    previous: string | null
    results: PokemonResponseResult[]
  }
}

export type PokemonsResponse = {
  data: {
    name: string
    sprites: {
      other: {
        home: {
          front_default: string
        }
        "official-artwork": {
          front_default: string
        }
      }
    }
    stats: Stat[]
    types: Type[]
  }
}
