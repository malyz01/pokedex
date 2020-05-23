import React from 'react'
import { connect } from 'react-redux'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
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
      <Container className="landing" fluid>
        <Row>
          {this.props.pokemon.map((p, i) => (
            <Col className="landing" xs="12" sm="4" md="2" key={p.name}>
              <Card border="info">
                <Card.Header>
                  <span className="landingPokemonName">{p.name}</span>
                </Card.Header>
                <Card.Body>
                  {this.props.selected && this.renderPokemon(p.name)}
                  {this.renderGetPokemon(p.name, i)}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
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
