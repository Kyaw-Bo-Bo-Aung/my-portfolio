// import {NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul className="nav-list">
        <a href="#main" className="nav-link">
          Home
        </a>
        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>
        <a href="#contact" className="nav-link">
          Contact
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
