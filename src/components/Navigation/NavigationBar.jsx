import React, { useState } from 'react';
import './css/navigationBar.css';

const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar-warpper">
            <div className="navbar">
                <div className="hamburger" onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
            <ul className={`nav-links ${isOpen ? "open" : ""}`}>
                <li><a href="/">Home</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#services">Documents</a></li>
                <li><a href="#portfolio">Calendar</a></li>
                <li><a href="#contact">Galery</a></li>
                <li><a href="/contacts">Contacts</a></li>
                <li><a href="#contact">News</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
