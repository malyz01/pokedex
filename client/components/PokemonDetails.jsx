import React from 'react'

const PokemonDetails = ({ pokemon }) => {
  const abilities = pokemon.abilities.map((a) => a.ability.name)
  return (
    <>
      <div className="card-image">
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      </div>
      <div className="card-tabs">
        <ul className="tabs tabs-fixed-width">
          <li className="tab">
            <a href="#abilities">Abilities</a>
          </li>
          <li className="tab">Info</li>
        </ul>
      </div>
      <div className="card-content grey lighten-4">
        <div id="abilities">
          {abilities.map((a) => (
            <div key={a}>{a}</div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PokemonDetails
