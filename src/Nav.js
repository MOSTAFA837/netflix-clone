import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShowNav(true)
            }
            else setShowNav(false);
        });
        return () => {
            window.removeEventListener('scroll')
        }
    }, [])

    return (
        <nav className={`nav ${showNav && 'nav_black'} `}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="logo"
            />

            {/* <img
                className="nav_avatar"
                src="user.png"
                alt="logo"
            /> */}
        </nav>
    )
}

export default Nav
