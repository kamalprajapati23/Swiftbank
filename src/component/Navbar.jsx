import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container-fluid bg-warning">
        <Link className="navbar-brand fw-bold text-dark" to="/">SwiftBank</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>

            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Loan</Link>
              <ul className="dropdown-menu">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/home-loan">Home Loan</NavLink></li>


                <li className="nav-item">
                <NavLink className="nav-link" to="/farmer">Farmer Loan</NavLink></li>
                
                <li className="nav-item">
                  <NavLink className="nav-link" to="/business-loan">Business Loan</NavLink>
                </li>

              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/transactions">ATM</Link>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
