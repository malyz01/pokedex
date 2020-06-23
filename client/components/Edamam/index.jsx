import React, { useState } from 'react'
import { connect } from 'react-redux'
import './style.css'

import { requestApiEdamam } from '../../store/actions/edamam'

const index = (props) => {
  const [query, setQuery] = useState({ q: '' })
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setQuery({ q: e.target.value })
  }

  const handleSubmit = (e) => {
    props.requestApiEdamam(query)
    setResult(query.q)
    setQuery({ q: '' })
  }

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <label className="mr-3">Query</label>
        <input
          className="mr-3"
          name="query"
          type="text"
          value={query.q}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
      <hr className="mb-5" />
      <div className="EdamamSearchResult p-2">
        <div>Result for: {result}</div>
      </div>
    </div>
  )
}

export default connect(null, { requestApiEdamam })(index)
