import { useState, useEffect } from 'react';
import '../styles/index.css';
import HamburgerOpen from '../assets/OpenHamburger.png';
import Close from '../assets/close.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setHasScrolled(true);
            } else {
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-container ${hasScrolled ? 'scrolled' : ''}`}>
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
                    <a
                        href="https://www.londalundstrom.com/shop/p/god-friends"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-btn"
                    >
                        Buy Now
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
