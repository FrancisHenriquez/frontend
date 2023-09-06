import React from 'react'
import './MainNavigatio.css'
import { MainHeader } from './MainHeader'
import { Link } from 'react-router-dom'
import { NavLinks } from './NavLinks'

export const MainNavigation = props => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav className='main-navigation__header-nav'>
        <NavLinks />
      </nav>
    </MainHeader>
  )
}
