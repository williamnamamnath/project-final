import { Link } from "react-router-dom";


const Navbar = () => {


    return (
        <>
          <nav>
            <Link to="/">
              <h1>NEUROFIBROMATOSIS</h1>
            </Link>
            <ul>
              <Link to="/contact" className="navLink">
                <li>Contact Us</li>
              </Link>
              <Link to="/about" className="navLink">
                <li>About</li>
              </Link>
            </ul>
          </nav>
        </>
      );
};

export default Navbar;