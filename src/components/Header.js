import { Link } from "react-router-dom";
import headerLogo from "./bartercircuslogo.png"
const Header = () => {
    return(
        <nav className="nav">
                <div className="logo">
                    <Link to='/'>
                        <div className="nav-bar">
                        <img src={headerLogo}/>
                        </div>
                    </Link>
                </div>
            <div className="nav-text">
                <div className="nav-links">
                    <h3 className="nav-link login">Login</h3>
                    <h3 className="nav-link add-items">Add Item</h3>
                    <h3 className="nav-link seller-profile">Create Profile</h3>
                </div>
            </div>
        </nav>
    )
}

export default Header;