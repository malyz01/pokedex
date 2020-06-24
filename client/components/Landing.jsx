import React from 'react'
import './landing.css'

const Landing = (props) => {
  const handleRoute = (route) => () => {
    props.history.push(`/${route}`)
  }

  return (
    <div className="container">
      <div className="landingMainContainer">
        <h1>TESTING OUT API's</h1>
        <hr />
        <div
          onClick={handleRoute('edamam')}
          className="jumbotron linkContainer"
        >
          Food Search - Edamam
        </div>
        <div
          onClick={handleRoute('spoonacular')}
          className="jumbotron linkContainer"
        >
          Food Search - Spoonacular
        </div>
        <div
          onClick={handleRoute('pokemon')}
          className="jumbotron linkContainer"
        >
          Pokemon Search
        </div>
      </div>
    </div>
  )
}

export default Landing
