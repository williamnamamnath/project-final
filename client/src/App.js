import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MyFavorites from "./pages/MyFavorites";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import TOS from "./pages/TOS";
import ContactSuccess from "./pages/ContactSuccess";
import Login from "./pages/UserAccount/Login";
import Signup from "./pages/UserAccount/Signup";
import SignupSuccess from "./pages/UserAccount/SignupSuccess";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<MyFavorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup-success" element={<SignupSuccess />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
