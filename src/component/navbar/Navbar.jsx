import React, { Component } from "react";
import logo from '../../assets/favicon.ico'
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleOverlayClick = () => {
    this.setState({ clicked: false });
  };

  render() {
    return (
      <>
        <nav>
          <a href="/">
            <img src={logo} alt="Trust's logo" />
          </a>

          <div>
            <ul
              id="navbar"
              className={this.state.clicked ? "active" : ""}
            >
              <li>
                <a className="active" href="/">
                  Home
                </a>
              </li>
              <li>
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    About Us
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/Who-We-Are">Who We Are?</a>
                    <a className="dropdown-item" href="/Managament-Team">Management Team</a>
                    <a className="dropdown-item" href="/Trust-Document">Trust Documents</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Projects
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/Health">Health</a>
                    <a className="dropdown-item" href="/Education">Education</a>
                    <a className="dropdown-item" href="/Orphanage">Orphanage</a>
                    <a className="dropdown-item" href="/Oldage-Home">Oldage Home</a>
                    <a className="dropdown-item" href="/Livelihood">Livelihood</a>
                    <a className="dropdown-item" href="/Disaster">Disaster</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Get Involved
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/FCRA-Details">Get FCRA Details</a>
                    <a className="dropdown-item" href="/Management-Team">Get Bank Details</a>
                    <a className="dropdown-item" href="/Volunteer">Volunteer</a>
                    <a className="dropdown-item" href="/Donate">Donate Now</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="dropdown show">
                  <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Media
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a className="dropdown-item" href="/Events">Events</a>
                    <a className="dropdown-item" href="/Image-Gallery">Image Gallery</a>
                    <a className="dropdown-item" href="/Video-Gallery">Video Gallery</a>
                  </div>
                </div>
              </li>
              <li>
                <a href="/Connect">Contact Us</a>
              </li>
              <li>
                <button id="DonateButton">Donate Now</button>
              </li>
              <li>
                <button id="logbutton">Log In</button>
              </li>
            </ul>
          </div>

          <div id="mobile" onClick={this.handleClick}>
            <i
              id="bar"
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <div id="overlay" className={this.state.clicked ? "active" : ""} onClick={this.handleOverlayClick}></div>
        </nav>
      </>
    );
  }
}

export default Navbar;
