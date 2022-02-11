import React from 'react'
import logo from '../assets/logo.svg'
import '../App.css'
import { Link } from 'react-router-dom'

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <div>
      <div className='doit-enter'>
        <img src={logo} className='doit-logo' alt='logo' />
        <Link to='/doit'>
          <button>Just do it</button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
