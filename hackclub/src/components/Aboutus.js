import React from 'react'
import image from '../eventimages/abt.gif'
export default function Aboutus() {

    return (
        <div id="aboutus">
            <h2 className="aboutusheading" id="aboutus">About Us</h2>
            <div className="specialdiv" />
            <div className="text-justify" style={{marginRight:'5%'}}>
           
            <img className="img" style={{width:"500px",height:"500px",marginLeft:"10px"}} src={image}></img>
            <p className="p" style={{textAlign:'justify'}}>Hack Club NUST is all about learning to code with experienced mentors and invent new and modern solutions to everyday problems! It's a platform that will build up your skills and enhance your coding abilities with new challenges. Because our goal is to grow together as a community and emerge as a tour de force in the programming world! Hack Club NUST is the platform to enhance your coding skills, giving you the opportunity to learn in a evolving and productive environment!</p>
          </div>
        </div>
    )
}
