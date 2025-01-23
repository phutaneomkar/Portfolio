import React from 'react';
import './Navbar.css';
import logo from '../../assets/om.png';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg pt-4 pb-4">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src={logo} alt="Logo" />
        </a>

        {/* Bootstrap toggle button for offcanvas menu */}
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Sidebar for Mobile */}
        <div
          className="offcanvas offcanvas-end"
          id="offcanvasNavbar"
          tabIndex="-1"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header m-3">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body align-items-center">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>

            <div className="d-flex">
              <a href="#" className="btnc w-100" id='connect-btn'>Connect with me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
