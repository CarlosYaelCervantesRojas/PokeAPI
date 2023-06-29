import Image from 'next/image'
import './globals.css'
import Card from '@/components/Card'

const fetchPokemons = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    .then(res => res.json())
}

export default async function Home() {
  const pokemonsObj = await fetchPokemons()
  const pokemons = pokemonsObj.results

// console.log(pokemons)

  return (

    <div className="container">
      <div className="imgContainer">
        <Image
          src={'/pokeApi.png'}
          alt='logo'
          width={454}
          height={168}
        />
      </div>
      <div className="cardsContainer">
        {
          pokemons.map((pokemon, index) => {
            return <Card key={index} url={pokemon.url} />
          })
        }
      </div>
    </div>

  )
}
