import { InView } from 'react-intersection-observer'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from '../components/Loader'
import PokemonCard from '../components/PokemonCard'
import { useApp } from '../states/AppStates'
import { PokemonResponseResult } from '../types/api'
import Layout from '../components/Layout'
import axios from 'axios'

import { useEffect } from 'react'

const Home = () => {
  const { pokemons, filteredPokemons } = useApp()
  let session_url = 'https://api.xendit.co/available_disbursements_banks'
  let username =
    'xnd_development_HFCSugrOqylkklIqFpiZm8TPxeWHpmWcTLoy3Ng8kz6kVf5oT94oyhuIYs3o'
  let password = ''
  let header = {
    'Content-Type': 'application/json',
    'allow-control-allow-origin': '*'
  }

  useEffect(() => {
    axios
      .get(session_url, {
        headers: header,
        auth: {
          username: username,
          password: password
        }
      })
      .then(function (response) {
        console.log('test ', response)
      })
      .catch(function (error) {
        console.log('Error on Authentication')
      })
  })

  if (pokemons.isLoading) {
    return (
      <div>
        <Loader />
      </div>
    )
  }

  return (
    <Layout>
      <main className="container mx-auto px-6 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPokemons?.map((pokemon: PokemonResponseResult) => (
            <InView
              key={pokemon.name}
              rootMargin="200px 0px"
              threshold={0.3}
              triggerOnce={true}
            >
              {({ inView, ref }) => {
                return inView ? (
                  <PokemonCard name={pokemon.name} />
                ) : (
                  <div
                    ref={ref}
                    className="w-full h-72 bg-gray-100 rounded-lg"
                  ></div>
                )
              }}
            </InView>
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Home
