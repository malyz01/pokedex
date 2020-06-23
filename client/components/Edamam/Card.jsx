import React from 'react'

const Card = ({ recipe: r }) => {
  return (
    <div className="card mb-5">
      <img src={r.image} className="card-img-top" alt={r.label} />
      <div className="card-header">
        <h5 className="card-title">label: {r.label}</h5>
        <div></div>
        <div>source: {r.source}</div>
      </div>
      <div className="card-body">
        <div>ShareAs: {r.shareAs}</div>
        <div>
          Diet Labels:
          <ul>
            {r.dietLabels.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          Health Labels:
          <ul>
            {r.healthLabels.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          Ingredient Line:
          <ul>
            {r.ingredientLines.map((x, i) => (
              <li key={i}>{x}</li>
            ))}
          </ul>
        </div>
        <br />
        <hr />
        <h4>Ingredients:</h4>
        <ul>
          {r.ingredients.map((x, i) => (
            <li key={i}>
              <div>text: {x.text} </div>
              <div>weight: {x.weight}</div>
            </li>
          ))}
        </ul>
        <div>Calories: {r.calories}</div>
      </div>
      <div className="card-footer text-muted">
        <div>Total weight: {r.totalWeight}</div>
        <div>Total time: {r.totalTime}</div>
      </div>
    </div>
  )
}

export default Card
