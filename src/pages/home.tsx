import React from 'react'
import logo from '../assets/logo.svg'
import '../index.css'
import { Link } from 'react-router-dom'

const HomePage: React.FunctionComponent<{}> = () => {
  return (
    <div className='flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
      <div className='flex flex-col items-center'>
        <img src={logo} className='doit-logo' alt='logo' />
        <Link to='/doit'>
          <button
            type='button'
            className='rounded-full border border-transparent shadow-sm
            px-4 py-2 text-base font-medium text-white bg-slate-900
            hover:bg-purple-400 active:bg-purple-500 focus:outline-none
            focus:ring focus:ring-yellow-300 sm:ml-3 sm:w-auto sm:text-sm'
          >
            GET IT DONE
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomePage
