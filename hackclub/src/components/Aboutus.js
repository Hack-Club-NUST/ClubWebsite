import React from 'react'
import image from '../eventimages/aboutus.gif'
export default function Aboutus() {

    return (
        <div id="aboutus">
            <h2 className="aboutusheading" id="aboutus">About Us</h2>
            <div className="specialdiv" />
            <div className="text-justify" style={{marginRight:'5%'}}>
           
            <img className="img" style={{width:"500px",height:"500px",marginLeft:"10px"}} src={image}></img>
            <p className="p" style={{textAlign:'justify'}}>Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.</p>
          </div>
        </div>
    )
}
