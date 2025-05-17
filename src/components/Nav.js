import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <div className="nav-container">
        <Link to="/">
          <img 
            src="https://cdn.freecodecamp.org/bestreviews/little-lemon-logo.png" 
            alt="Little Lemon Logo" 
            className="logo" 
          />
        </Link>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;