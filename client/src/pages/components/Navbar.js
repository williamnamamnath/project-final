import { useContext } from "react";
import { Link } from "react-router-dom";

import { LoginInfoContext } from "../UserAccount/LoginInfo";

const Navbar = () => {

  const { signedOut, loginConfirmed } = useContext(LoginInfoContext);

    return (
        <>
          <nav>
            <Link to="/">
              <h1>NUTRISSENCE</h1>
            </Link>
            <ul>
              {loginConfirmed && (
              <Link to="/favorites" className="navLink">
                <li>My Favorites</li>
              </Link>
              )}
              <Link to="/contact" className="navLink">
                <li>Contact</li>
              </Link>
              <Link to="/about" className="navLink">
                <li>About</li>
              </Link>
              {!loginConfirmed ? (
              <Link to="/login" className="navLink">
                <li>Login | Signup</li>
              </Link>
              ) : (
              <Link to="/login" className="navLink">
                <li onClick={signedOut} style={{backgroundColor:"white", padding: "5px", color: "black", borderRadius:"5px"}}>Logout</li>
              </Link>
              )}
            </ul>
          </nav>
        </>
      );
};

export default Navbar;