import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
<<<<<<< HEAD
import TOS from "./pages/TOS";
import ContactSuccess from "./pages/ContactSuccess";
import Login from "./pages/UserAccount/Login";
import Signup from "./pages/UserAccount/Signup";
import APIData from "./pages/Home/Recipes/APIData";


const App = () => {


=======


const App = () => {


>>>>>>> dadddcda7c1a86667d6b4d62a942e4378f78490e
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
<<<<<<< HEAD
          <Route path="/" element={<APIData />} />
          <Route path="/favorites" element={<MyFavorites />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tos" element={<TOS />} />
          <Route path="/contact-success" element={<ContactSuccess />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
=======
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
>>>>>>> dadddcda7c1a86667d6b4d62a942e4378f78490e
        </Routes>
      </Router>
    </>
  );
}

export default App;
