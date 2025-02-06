import '../styles/index.css'

const Navbar = () => {
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };
  
    return (
      <nav className="nav-container">
        <h1 className="nav-title">God Friends</h1>
        <div>
          <ul className='nav-list'>
            <li>
              <span 
                onClick={() => scrollToSection('about-book')} 
                className="nav-link"
              >
                About The Book
              </span>
            </li>
            <li>
              <span 
                onClick={() => scrollToSection('meet-authors')} 
                className="nav-link"
              >
                Meet The Authors
              </span>
            </li>
            <li>
              <span 
                onClick={() => scrollToSection('reviews')} 
                className="nav-link"
              >
                Reviews
              </span>
            </li>
            <li>
              <span 
                onClick={() => scrollToSection('connect')} 
                className="nav-link"
              >
                Connect
              </span>
            </li>
            <li>
              <button className="buy-btn">Buy Now</button>
            </li>
          </ul>
        </div>
      </nav>
    );
};
  
export default Navbar;