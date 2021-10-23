import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <Link to="/"> 
                    <li className="nav-link">
                        Home
                    </li>
                </Link>
                <Link to="/portfolio"> 
                    <li className="nav-link">
                    Portfolio 
                    </li>
                </Link>
                <Link to="/contact"> 
                    <li className="nav-link">
                        Contact
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar