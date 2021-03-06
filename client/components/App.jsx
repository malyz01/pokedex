import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Landing from './Landing'
import Pokemon from './Pokemon'
import Edamam from './Edamam'
import Spoonacular from './Spoonacular'
import RecipeInfo from './Spoonacular/Recipe'
import Modal from './Pokemon/Modal'

const App = () => {
  return (
    <>
      <Modal />
      <HashRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pokemon" component={Pokemon} />
        <Route exact path="/edamam" component={Edamam} />
        <Route exact path="/spoonacular" component={Spoonacular} />
        <Route exact path="/spoonacular/:id" component={RecipeInfo} />
      </HashRouter>
    </>
  )
}

export default App
