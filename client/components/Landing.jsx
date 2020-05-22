import React from 'react'
import { connect } from 'react-redux'
import './landing.css'

import {
  requestApiAllPokemon
  // requestApiPokemon
} from '../store/actions/pokemon'

class Landing extends React.Component {
  componentDidMount() {
    this.props.requestApiAllPokemon()
  }

  // handleOnClick = (id) => () => {
  //   this.props.requestApiPokemon(id)
  // }

  render() {
    return (
      <div>
        {this.props.pokemon.map((p, i) => (
          <div key={p.name} className="landingPokemonContainer">
            <div className="landingPokemonName">
              {i + 1} - {p.name}
            </div>
            <div>{p.url}</div>
            {/* <div>
              <button onClick={this.handleOnClick(i + 1)}>Get Pokemon</button>
            </div> */}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon.all
})

const mapDispatchToProps = {
  requestApiAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
