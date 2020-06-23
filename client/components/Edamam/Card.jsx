import React from 'react'

const Card = ({ recipe: r }) => {
  return (
    <div className="card text-center">
      <div className="card-header">
        <div>label: {r.label}</div>
        <div>source: {r.source}</div>
      </div>
      <div className="card-body">
        <h5 className="card-title">Special title treatment</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
      </div>
      <div className="card-footer text-muted">2 days ago</div>
    </div>
  )
}

export default Card
