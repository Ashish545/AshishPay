import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Navbar() {

    const [show,setShow] = useState(false);
  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-light ">
          <div class="container">
            <a class="navbar-brand" href="#">
              AshishPay
            </a>
            <button

              onClick={()=>{
                setShow(!show)
              }}

              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${show? "show": ""} ` }>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <NavLink class="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/services">
                    Services
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink class="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
              <form class="d-flex">
          
                <button class="btn btn-outline-success btn-style" type="submit">
                  Sign Up
                </button>
                <button class="btn btn-outline-success btn-style btn-style-border" type="submit">
                  Login 
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
