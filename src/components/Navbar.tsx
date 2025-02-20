import { useState } from 'react';
import '../styles/index.css';
import HamburgerOpen from '../assets/OpenHamburger.png'; 
import Close from '../assets/close.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false); // Close menu on click (mobile)
        }
    };

    return (
        <nav className="nav-container">
            <h1 className="nav-title">God Friends</h1>

            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
            <img 
                    src={isOpen ? Close : HamburgerOpen} 
                    alt={isOpen ? "Close Menu" : "Open Menu"} 
                    className="hamburger-icon" 
                />
            </div>

            {/* Nav List */}
            <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
                <li>
                    <span onClick={() => scrollToSection('About-Book')} className="nav-link">
                        About The Book
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Authors')} className="nav-link">
                        Meet The Authors
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Reviews')} className="nav-link">
                        Reviews
                    </span>
                </li>
                <li>
                    <span onClick={() => scrollToSection('Connect')} className="nav-link">
                        Connect
                    </span>
                </li>
                <li>
                    <button className="buy-btn">Buy Now</button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
