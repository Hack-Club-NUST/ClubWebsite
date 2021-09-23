import React, { Component } from "react";

import { FaAlignRight } from "react-icons/fa"
import logo from "../logo.jpeg"
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    isOpen: false
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar-class">
        <div className="nav-center-class">
          <div className="nav-header-class">
            <Link to="/">
              <img className="logo" src={logo} alt="Hack Club" />
            </Link>
            <button
              type="button"
              className="nav-btn-class"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon-class" />
            </button>
          </div>

          <ul 
            className={this.state.isOpen ? "nav-links-class show-nav-class" : "nav-links-class"}
          >
            <li>
              <Link to="/" >Home</Link>
            </li>
            <li>
              <Link to="/join">Join us</Link>
            </li>
            <li>
              <Link to="/team" >Team</Link>
            </li>
            <li>
              <Link to="/navbarevent">Event</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
