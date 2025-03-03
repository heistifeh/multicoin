import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./initpages/Home";
import Portfolio from "./pages/Portfolio";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
