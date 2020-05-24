import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Landing from './Landing'
import Modal from './Modal'

const App = () => {
  return (
    <>
      <Modal />
      <HashRouter>
        <Route exact path="/" component={Landing} />
      </HashRouter>
    </>
  )
}

export default App
