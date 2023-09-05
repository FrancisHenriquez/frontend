import React from 'react'
import './MainNavigatio.css'
import { MainHeader } from './MainHeader'
import { Link } from 'react-router-dom'

export const MainNavigation = props => {
  return (
    <MainHeader>
        <button className='main-navigation__menu-btn'>
            <span />
            <span />
            <span />
        </button>
        <h1 className='main-navigaton__title'>
           <Link to="/">YourPlaces</Link> 
        </h1>
        <nav>
            ...
        </nav>
    </MainHeader>
  )
}
