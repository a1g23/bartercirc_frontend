import { Link } from "react-router-dom";

const Header = () => {
    return(
        <nav className="nav">
            <Link to='/'>
                <div><h1> BackEnd Bookmark Boyz' Barter Circus</h1></div>
            </Link>
        </nav>
    )
}

export default Header;