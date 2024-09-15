import { useEffect, useState } from 'react';
import './css/navigationBar.css';
import Text from './Text.jsx';

const NavigationBar = () => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowSize(window.innerWidth);

            if (windowSize <= 768) {
                setIsOpen(false);
              }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [windowSize])

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
                <li><a href="/calendar"><Text word="Calendar" /></a></li>
                <li><a href="#services"><Text word="Documents" /></a></li>
                <li><a href="#contact"><Text word="Galery" /></a></li>
                <li><a href="/contacts"><Text word="Contacts" /></a></li>
                <li><a href="#contact"><Text word="News" /></a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;
