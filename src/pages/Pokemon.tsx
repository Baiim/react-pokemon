import { useNavigate, useParams } from "react-router-dom"
import useFindPokemon from "../hooks/find-pokemon"
import Layout from "../components/Layout"
import PokemonCard from "../components/PokemonCard"

const Pokemon = () => {
  const navigate = useNavigate()
  const { pokemon: pokemonName } = useParams()

  const pokemon = useFindPokemon(pokemonName)

  const goBack = () => navigate(-1)

  if (pokemon.isLoading) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className="container mx-auto px-6 md:px-0">
        {pokemon.data && (
          <div className="max-w-md mx-auto space-y-6">
            <PokemonCard name={pokemon.data.data.name} showStats />
            <div
              role="button"
              className="block text-sm text-gray-400"
              onClick={goBack}
            >
              Back
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Pokemon
