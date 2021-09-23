import  React, { Component } from "react";
import { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import navbarbrandlogo from '../../eventimages/hackclubassets/hc_color.png'

import "./NewNavbar.css";


export default class NewNavbar extends Component {
  state= {clicked:false}

  handleClick = () => {
    this.setState({clicked:!this.state.clicked});
    console.log("clicked");
  }

  render(){
    return (
        <div className="">


<nav className=  'navbar navbar-expand-lg navbar-transparent navbar-active  '  >
  <a className="navbar-brand" href="#"> <img src={navbarbrandlogo} alt="" /></a>
  <div className="menu-icons" onClick={this.handleClick}>
  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
  </div>

  <div className="navbar-collapse" id="navbarTogglerDemo02">
    <ul className={this.state.clicked ? 'navbar-nav mr-auto mt-2 mt-lg-0 navactive' :  'navbar-nav mr-auto mt-2 mt-lg-0'}>
      
	  
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#aboutus">About Us</a>
      </li>

	  <li className="nav-item">
        <a className="nav-link " href="#team">Our Team</a>
      </li>

	  <li className="nav-item">
        <a className="nav-link " href="#Event">Events</a>
      </li>


	  <li className="nav-item">
        <a className="nav-link " href="#contact-us-heading">Contact Us</a>
      </li>
	  
	  
    </ul>

   
  </div>
</nav>








    </div>






        
    )
  }
}



// COmments 
/*

const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
	const [navbar,setNavbar] = useState(false);
	const changeBackground  = () => {
		if(window.scrollY>=80)
		setNavbar(true);
		else
		setNavbar(false);
		console.log(window.scrollY);
	}
: 'navbar navbar-expand-lg navbar-transparent bg-transparent'}
	window.addEventListener('scroll'
,changeBackground);
  // */