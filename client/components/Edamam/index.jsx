import React, { useState } from 'react'
import './style.css'

const index = () => {
  const [q, setQ] = useState('')
  const [result, setResult] = useState('')

  const handleChange = (e) => {
    setQ(e.target.value)
  }

  const handleSubmit = (e) => {
    setResult(q)
    setQ('')
  }

  return (
    <div className="container mt-4">
      <div className="jumbotron">
        <label className="mr-3">Query</label>
        <input
          className="mr-3"
          name="q"
          type="text"
          value={q}
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

export default index
