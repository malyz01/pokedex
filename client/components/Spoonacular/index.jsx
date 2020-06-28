import React, { useState } from 'react'
import { connect } from 'react-redux'
import './style.css'

import Card from './Card'
import { requestApiSpoonacular } from '../../store/actions/spoonacular'

const index = (props) => {
  const [query, setQuery] = useState({
    query: '',
    cuisine: '',
    diet: '',
    excludeIngredients: '',
    intolerances: ''
  })
  const spoonacularKeys = Object.keys(props.spoonacular)

  const handleChange = (e) => {
    e.persist()
    setQuery((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleSubmit = (e) => {
    props.requestApiSpoonacular(query)
    setQuery({
      query: '',
      cuisine: '',
      diet: '',
      excludeIngredients: '',
      intolerances: ''
    })
  }
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <div>
          <label style={{ minWidth: 150 }} className="mr-3">
            Query:
          </label>
          <input
            className="mr-3"
            name="query"
            type="text"
            value={query.query}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ minWidth: 150 }} className="mr-3">
            Cuisine:
          </label>
          <input
            className="mr-3"
            name="cuisine"
            type="text"
            value={query.cuisine}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ minWidth: 150 }} className="mr-3">
            Diet:
          </label>
          <input
            className="mr-3"
            name="diet"
            type="text"
            value={query.diet}
            onChange={handleChange}
          />
        </div>
        <div>
          <label style={{ minWidth: 150 }} className="mr-3">
            Exclude Ingredients:
          </label>
          <input
            className="mr-3"
            name="excludeIngredients"
            type="text"
            value={query.excludeIngredients}
            onChange={handleChange}
          />
          <label>
            <em>separate by comma</em>
          </label>
        </div>
        <div>
          <label style={{ minWidth: 150 }} className="mr-3">
            Intolerances:
          </label>
          <input
            className="mr-3"
            name="intolerances"
            type="text"
            value={query.intolerances}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      <hr className="mb-2" />
      <div className="SpoonacularSearchResult p-2">
        {spoonacularKeys.length > 0 &&
          spoonacularKeys
            .filter((x) => x !== 'results')
            .map((x) => (
              <div key={x}>
                <strong>{x}:</strong> {props.spoonacular[x].toString()}
              </div>
            ))}
        <div className="row justify-content-md-center">
          {spoonacularKeys.length > 0 &&
            props.spoonacular.results.map((x) => (
              <div className="col-sm-4" key={x.id}>
                <Card baseUri={props.spoonacular.baseUri} results={x} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  spoonacular: state.spoonacular.queries
})

export default connect(mapStateToProps, { requestApiSpoonacular })(index)
