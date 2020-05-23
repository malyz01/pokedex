import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import Landing from './Landing'

const App = () => {
  return (
    <HashRouter>
      <Route exact path="/" component={Landing} />
    </HashRouter>
  )
}

export default App
