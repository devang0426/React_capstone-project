import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/booking">Book a Table</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;