import React from 'react'
import { connect } from 'react-redux'
import './landing.css'

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

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.pokemon.map((p, i) => (
            <div key={p.name} className="col s3 landingPokemonContainer">
              <div className="landingPokemonName">{p.name}</div>
              <div className="landingPokemonBtn">
                <button
                  className="waves-effect waves-light btn"
                  onClick={this.handleOnClick(i + 1)}
                >
                  Get Pokemon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.all
})

const mapDispatchToProps = {
  requestApiAllPokemon,
  requestApiPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
