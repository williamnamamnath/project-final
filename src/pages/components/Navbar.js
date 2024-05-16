import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
          <nav>
            <Link to="/">
              <h1>NUTRISSENCE</h1>
            </Link>
            <ul>
              <Link to="/favorites" className="navLink">
                <li>My Favorites</li>
              </Link>
              <Link to="/contact" className="navLink">
                <li>Contact</li>
              </Link>
              <Link to="/about" className="navLink">
                <li>About</li>
              </Link>
              <Link to="/login" className="navLink">
                <li>Login / Signup</li>
              </Link>
            </ul>
          </nav>
        </>
      );
};

export default Navbar;