import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  const abilities = pokemon.abilities.map((a) => a.ability.name)
  return (
    <>
      <div className="card-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-content">
        <div>Abilities</div>
        {abilities.map((a) => (
          <div>{a}</div>
        ))}
      </div>
    </>
  )
}

export default PokemonDetails
