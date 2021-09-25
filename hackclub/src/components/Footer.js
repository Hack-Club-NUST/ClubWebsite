import React from 'react';
import './Footer.css'





export default function Footer() {


    return (
        <div id="footer" className="site-footer">

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify w-75">HackClub-Nust.com Hack Club is a nonprofit network of high school coding clubs and makers around the world.Our main goal is to connect with developers around the world and drive towards better solutions </p>
          </div>

         

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#contact-us-heading">Contact Us</a></li>
              <li><a href="#Event">Events</a></li>
              
            </ul>
          </div>
        </div>
       
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2021 All Rights Reserved by 
         <a href="#"> HackClubNust</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/hackclub.nust" target="_blank"></a></li>
              <li><a className="instagram" href="https://www.instagram.com/hackclub.nust/" target="_blank"></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/company/hackclub-nust" target="_blank"></a></li>
              <li><a className="youtube" href="https://www.youtube.com/channel/UCYSp6-abw1e-OkNfCQwDqAw" target="_blank"></a></li>   
            </ul>
          </div>
        </div>
      </div>

</div>
        
         
    )
}