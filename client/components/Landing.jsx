import React from 'react'
import { connect } from 'react-redux'

import { requestApiAllPokemon } from '../store/actions/pokemon'

class Landing extends React.Component {
  componentDidMount() {
    this.props.requestApiAllPokemon()
  }

  render() {
    return <h1>Landing Page</h1>
  }
}

const mapStateToProps = (state) => ({
  pokemon: state.pokemon
})

const mapDispatchToProps = {
  requestApiAllPokemon
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
