import React from 'react'

import './index.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/home'
import DoitPage from './pages/doit'

const App: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/doit' element={<DoitPage />}></Route>
      </Routes>
    </div>
  )
}

export default App
