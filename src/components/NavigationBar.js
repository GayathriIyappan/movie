import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './NavigationBar.css'

const NavigationBar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo' style={{ color: '#ffffff' }}>
                g-Movie
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#home' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#footer' onClick={closeMenu}>Membership</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavigationBar