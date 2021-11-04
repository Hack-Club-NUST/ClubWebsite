import React from 'react';
import './Footer.css'

export default function Footer() {


    return (
        <div id="footer" className="site-footer">

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5">
            <h6 style={{fontWeight:"bolder"}} >Partners</h6>
            <ul className="footer-links d-md-flex partners-ul ">
              <li><a href="https://gdsc.community.dev/national-university-of-sciences-and-technology-nust/"><img style={{width:"60px",height:"50px",marginTop:"10px"}} src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_3,f_auto,g_center,h_175,q_auto:good,w_175/v1/gcs/platform-data-dsc/events/logo_Iu2smSE.png"></img></a></li>
              <li><a href="https://mlsalahore.com/"><img style={{width:"60px",height:"50px",marginTop:"10px"}} src="https://mlsalahore.com/static/img/mlsaofficial-logo.png"></img></a></li>
              <li><a href="https://www.linkedin.com/company/nust-media-club/"><img style={{width:"60px",height:"50px",marginTop:"10px"}} src=" https://media-exp1.licdn.com/dms/image/C510BAQGnwMwck64Fmg/company-logo_200_200/0/1586365769402?e=1643846400&v=beta&t=nkoFZl0C7RS7LweTkvE2fuSkrLieA6Sl0MPoqtpw2ms"></img></a></li>
             
            </ul>
          </div>

         

          <div className="col-xs-6 col-md-3">
            <h6 style={{fontWeight:"bolder"}}>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="#aboutus">About Us</a></li>
              <li><a href="#contact-us-heading">Contact Us</a></li>
              <li><a href="#Event">Events</a></li>
              
            </ul>
          </div>

          <div className="col-md-4 col-md-4 col-xs-4">
            <ul className="social-icons">
              <li><a className="facebook" href="https://www.facebook.com/hackclub.nust" target="_blank"></a></li>
              <li><a className="instagram" href="https://www.instagram.com/hackclub.nust/" target="_blank"></a></li>
              <li><a className="linkedin" href="https://www.linkedin.com/company/hackclub-nust" target="_blank"></a></li>
              <li><a className="youtube" href="https://www.youtube.com/channel/UCYSp6-abw1e-OkNfCQwDqAw" target="_blank"></a></li>   
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

       
        </div>
      </div>

</div>
        
         
    )
}