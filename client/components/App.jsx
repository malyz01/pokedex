import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Landing from './Landing'
import Pokemon from './Pokemon'
import Edamam from './Edamam'
import Modal from './Pokemon/Modal'

const App = () => {
  return (
    <>
      <Modal />
      <HashRouter>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pokemon" component={Pokemon} />
        <Route exact path="/edamam" component={Edamam} />
      </HashRouter>
    </>
  )
}

export default App
