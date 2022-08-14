import { PokemonResponse, PokemonsResponse } from "../types/api"
import client from "./client"

const getAllPokemon = async (): Promise<PokemonResponse> =>
  client.get("/pokemon?limit=100")
const getPokemon = async (name: string): Promise<PokemonsResponse> =>
  client.get(`/pokemon/${name}`)

const pokemonApi = {
  getAllPokemon,
  getPokemon
}

export default pokemonApi
