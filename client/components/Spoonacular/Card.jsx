import React from 'react'
import { withRouter } from 'react-router-dom'

const Card = ({ baseUri: uri, results: r, history }) => {
  const handleOnClick = () => {
    history.push(`/spoonacular/${r.id}`)
  }

  return (
    <div
      onClick={handleOnClick}
      style={{ cursor: 'pointer' }}
      className="card my-5"
    >
      <img src={uri + r.image} className="card-img-top" alt={r.title} />
      <div className="card-header">
        <h5 className="card-title">title: {r.title}</h5>
        <div>sourceUrl: {r.sourceUrl}</div>
      </div>
      <div className="card-body">
        <div>servings: {r.servings}</div>
        <div>Ready in Minutes: {r.readyInMinutes}</div>
      </div>
      <div className="card-footer text-muted">
        <div>Open License : {r.openLicense}</div>
      </div>
    </div>
  )
}

export default withRouter(Card)
