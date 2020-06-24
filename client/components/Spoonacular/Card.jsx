import React from 'react'

const Card = ({ results: r }) => {
  return (
    <div className="card mb-5">
      <img src={r.image} className="card-img-top" alt={r.id} />
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

export default Card
