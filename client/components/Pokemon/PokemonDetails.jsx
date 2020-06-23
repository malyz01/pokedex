import React from 'react'
import * as copy from 'copy-to-clipboard'
import Card from 'react-bootstrap/Card'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './pokemonDetails.css'

const Abilities = ({ pokemon }) => {
  const abilities = pokemon.abilities.map((a) => a.ability.name)
  return (
    <div className="pokemon">
      {abilities.map((a, i) => (
        <div key={a}>{`${i + 1}. ${a}`}</div>
      ))}
    </div>
  )
}

const Info = ({ pokemon }) => {
  return (
    <div className="pokemon">
      <div>Name: {pokemon.name}</div>
      <div>Height: {pokemon.height}</div>
      <div>Weight: {pokemon.weight}</div>
    </div>
  )
}

const PokemonDetails = ({ pokemon }) => {
  const handleCopy = (string) => () => {
    copy(string)
  }

  return (
    <>
      <Card.Img
        variant="top"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <Tabs defaultActiveKey="info">
        <Tab className="pokemonDetailTabContent" eventKey="info" title="Info">
          <button onClick={handleCopy(pokemon.name)}>Copy name</button>
          <Info pokemon={pokemon} />
        </Tab>
        <Tab
          className="pokemonDetailTabContent"
          eventKey="abilities"
          title="Abilities"
        >
          <Abilities pokemon={pokemon} />
        </Tab>
      </Tabs>
    </>
  )
}

export default PokemonDetails
