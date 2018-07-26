import React from 'react'
import { NavLink } from 'react-router-dom'
import isLoggedIn from '../isLoggedIn'

const NavItem = ({ title, link = '#' }) =>
    <li className='nav-item'>
        <NavLink className='nav-link' activeClassName='active' exact to={link}>{title}</NavLink>
    </li >


const NavBar = ({ user }) =>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
                <NavItem title='Search' link='/' />
                <NavItem title='Favorites' link='/favorites' />
                <NavItem title='My Questions' />
            </ul>
            <ul className="navbar-nav">
                <li className='nav-item'>
                    {user.id
                        ? <a className='nav-link' href='#'>Sign Out</a>
                        : <a className='nav-link' data-toggle='modal' href='#loginModal' data-dismiss='modal'>Login</a>
                    }
                </li>
            </ul>
        </div>
    </nav>

export default isLoggedIn(NavBar)