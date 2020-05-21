import React from 'react'
import { connect } from 'react-redux'

import { requestApiAllPokemon } from '../store/actions/pokemon'

class Landing extends React.Component {
  componentDidMount() {
    this.props.requestApiAllPokemon()
  }

  render() {
    return (
      <div>
        {this.props.pokemon.map((p, i) => (
          <div key={p.name} style={{ margin: '1.5rem 0' }}>
            <div style={{ textTransform: 'capitalize' }}>
              {i + 1} - {p.name}
            </div>
            <div>{p.url}</div>
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
