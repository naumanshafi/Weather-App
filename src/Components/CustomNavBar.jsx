import { Link } from 'react-router-dom';
import './CustomNavBar.css';


const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className="navbar-item">
          <Link to="/settings">Settings</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;





