import React from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("meni Toggled:", !isMenuOpen);
  };

  return (
    <header
      id="header"
      className="site-navbar site-navbar-target"
      role="banner"
    >
      <div className="container mb-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="site-logo mr-auto">
            <Link to="/" className="text-primary">
              Join the adventure<span className="text-primary">.</span>
            </Link>
          </div>
          <div className="site-quick-contact d-none d-lg-flex ml-auto ">
            <div className="d-flex site-info align-items-center mr-5">
              <span className="block-icon mr-3">
                <span className="icon-map-marker text-yellow"></span>
              </span>
              <span>
                34 Street Name,City Name Here, <br />
                United States
              </span>
            </div>
            <div className="d-flex site-info align-items-center">
              <span className="block-icon mr-3">
                <span className="icon-clock-o"></span>
              </span>
              <span>
                Sunday - Friday 8:00AM - 4:00PM <br />
                Saturday CLOSED
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="menu-wrap d-flex align-items-center">
          <span className="d-inline-block d-lg-none">
            <button
              aria-label="Toggle menu"
              className="navbar-toggler text-black d-lg-none"
              type="button"
              onClick={toggleMenu}
            > <FontAwesomeIcon icon={faBars} />
              <span className="icon-menu h3 text-black"></span>
            </button>
          </span>

          {/* <a href="#" className="text-black site-menu-toggle js-menu-toggle py-5">
            <span className="icon-menu h3 text-black"></span>
          </a> */}

          <nav
            className={`site-navigation text-left mr-auto  d-lg-block ${
              isMenuOpen ? "d-block" : "d-none"
            }`}
            role="navigation"
          >
            <ul className="site-menu main-menu js-clone-nav mr-auto ">
              <li className="active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to="/ebooks" className="nav-link">
                  ebook
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="top-social ml-auto">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
