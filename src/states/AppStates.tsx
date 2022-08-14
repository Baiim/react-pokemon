import { useContext, createContext, useState, useMemo } from "react"
import { useQuery, UseQueryResult } from "@tanstack/react-query"
import { pokemonApi } from "../api"
import { PokemonResponse, PokemonResponseResult } from "../types/api"

type AppContextProps = {
  pokemons: UseQueryResult<PokemonResponse>
  searchQuery: string
  filteredPokemons: PokemonResponseResult[] | undefined
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
}

type AppStateProviderProps = {
  children: React.ReactNode
}

const AppContext = createContext<AppContextProps>({} as AppContextProps)
export const useApp = () => useContext(AppContext)

export const AppStateProvider: React.FC<AppStateProviderProps> = ({
  children
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("")

  const pokemons = useQuery(["all-pokemons"], () => {
    return pokemonApi.getAllPokemon()
  })

  const filteredPokemons = useMemo(() => {
    if (searchQuery === "") {
      return pokemons.data?.data.results
    }

    return pokemons.data?.data.results?.filter((pokemon) => {
      return pokemon.name.includes(searchQuery)
    })
  }, [searchQuery, pokemons.data])

  return (
    <AppContext.Provider
      value={{
        pokemons,
        searchQuery,
        setSearchQuery,
        filteredPokemons
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
