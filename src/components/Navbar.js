import {NavLink} from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <ul className="nav-list">
                <NavLink exact to="/" className="nav-link"> 
                    
                        Home
                    
                </NavLink>
                <NavLink to="/portfolio" className="nav-link"> 
                    
                    Portfolio 
                    
                </NavLink>
                <NavLink to="/contact" className="nav-link"> 
                    
                        Contact
                    
                </NavLink>
            </ul>
        </nav>
    )
}

export default Navbar