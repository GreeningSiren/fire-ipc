import { useState } from 'react';
import './css/navigationBar.css';
import Text from './../Text/Text.jsx';

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
                <li><a href="/"><Text word="Home" /></a></li>
                <li><a href="#portfolio"><Text word="Calendar" /></a></li>
                <li><a href="#about"><Text word="About us" /></a></li>
                <li><a href="#services"><Text word="Documents" /></a></li>
                <li><a href="#contact"><Text word="Galery" /></a></li>
                <li><a href="/contacts"><Text word="Contacts" /></a></li>
                <li><a href="#contact"><Text word="News" /></a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
