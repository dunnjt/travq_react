import React from 'react'

const NavItem = ({ title, active, link = '#' }) =>
    <li className={`nav-item ${active ? 'active' : ''}`}>
        <a className={'nav-link'} href={link}>{title}</a>
    </li >


export default () =>
    <nav className="navbar navbar-expand-lg navbar-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <NavItem title={'Search'} active />
                <NavItem title={'Favorites'} />
                <NavItem title={'My Questions'} />
            </ul>
        </div>
    </nav>