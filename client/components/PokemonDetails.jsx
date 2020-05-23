import React from 'react'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

const Abilities = ({ pokemon }) => {
  const abilities = pokemon.abilities.map((a) => a.ability.name)
  return (
    <div>
      {abilities.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </div>
  )
}

const PokemonDetails = ({ pokemon }) => {
  const abilities = pokemon.abilities.map((a) => a.ability.name)
  return (
    <>
      <Card.Img
        variant="top"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <Abilities pokemon={pokemon} />
      <Card.Text></Card.Text>
    </>
  )
}

export default PokemonDetails
