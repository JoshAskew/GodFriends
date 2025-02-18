import '../styles/index.css';
import Facebook from '../assets/Facebook.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-text">
            <h1 className="footer-header">God Friends</h1>
            <p className="footer-copyright">© 2025 God Friends. All Rights Reserved.</p>
            <div className="footer-socials">
                <a href="https://www.facebook.com/profile.php?id=61565095079731" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Facebook" className="footer-social-icon" />
                </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
