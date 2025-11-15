import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/News";
import Cars from "../pages/Cars";

export default function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/index" className="logo">
            Car World
          </Link>

          <div className="nav-right">
            <ul className="nav-menu">
              <li>
                <Link to="/index" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/news" className="nav-link">
                  News
                </Link>
              </li>
              <li>
                <Link to="/cars" className="nav-link">
                  Cars
                </Link>
              </li>
            </ul>
            <div className="cart-container">
              <div className="cart-link">
                <i className="fas fa-shopping-cart"></i>
                <span className="cart-badge">0</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </BrowserRouter>
  );
}
