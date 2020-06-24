import React, { useState } from 'react'
import { connect } from 'react-redux'
import './style.css'

import Card from './Card'
import { requestApiSpoonacular } from '../../store/actions/spoonacular'

const index = (props) => {
  const [query, setQuery] = useState({ query: '' })
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setQuery({ [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    props.requestApiSpoonacular(query)
    setResult(query.q)
    setQuery({ query: '' })
  }
  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <label className="mr-3">Query</label>
        <input
          className="mr-3"
          name="query"
          type="text"
          value={query.query}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      <hr className="mb-5" />
      <div className="SpoonacularSearchResult p-2">Spoonacular data</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  spoonacular: state.spoonacular
})

export default connect(mapStateToProps, { requestApiSpoonacular })(index)
