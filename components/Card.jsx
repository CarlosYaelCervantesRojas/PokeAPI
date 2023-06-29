import './Card.css'

const fetchPokemon = (url) => {
  return fetch(url)
    .then(res => res.json())
}


export default async function Card({ url }) {
  const pokemonObj = await fetchPokemon(url)
  const imgpok = pokemonObj.sprites.front_default

  return (
    <>
      <div className="card">
        <span className="id">#{pokemonObj.id}</span>
        <div className="text">
          <img src={imgpok} alt="pokemon" />
          <h2>{pokemonObj.name.toUpperCase()}</h2>
          <span>{pokemonObj.types[0].type.name.toUpperCase()}</span>
        </div>
      </div>
    </>

  )
}
