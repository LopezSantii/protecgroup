import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <section className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="/img/logo.png" alt="Logo de protecgroup" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="offcanvas offcanvas-end text-bg-dark"
          tabIndex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul id="nav" className="navbar-nav ms-auto mx-auto  mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active nav-link" : "nav-link"
                  }
                  to="/category/craneana"
                >
                  Craneana
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/auditiva">
                  Auditiva
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/facial">
                  Facial
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/ocular">
                  Ocular
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/category/respiratoria">
                  Respiratoria
                </NavLink>
              </li>
            </ul>
            <CartWidget />
          </div>
        </div>
      </section>
    </nav>
  );
}
