import React from 'react'
import { connect } from 'react-redux'
import './landing.css'

import PokemonDetails from './PokemonDetails'
import {
  requestApiAllPokemon,
  requestApiPokemon
} from '../store/actions/pokemon'

class Landing extends React.Component {
  componentDidMount() {
    this.props.requestApiAllPokemon()
  }

  handleOnClick = (id) => () => {
    this.props.requestApiPokemon(id)
  }

  renderPokemon = (name) => {
    if (name === this.props.selected.name) {
      return <PokemonDetails pokemon={this.props.selected} />
    }
  }

  renderGetPokemon = (name, i) => {
    const select = this.props.selected ? this.props.selected.name : ''
    if (name !== select) {
      return (
        <div key={i} className="card-action">
          <button
            className="waves-effect waves-light btn"
            onClick={this.handleOnClick(i + 1)}
          >
            Get Pokemon
          </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.pokemon.map((p, i) => (
          <div key={p.name} className="landingPokemonName">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{p.name}</span>
              </div>
              {this.props.selected && this.renderPokemon(p.name)}
              {this.renderGetPokemon(p.name, i)}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.all,
  selected: state.pokemon.selected
})

const mapDispatchToProps = {
  requestApiAllPokemon,
  requestApiPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
