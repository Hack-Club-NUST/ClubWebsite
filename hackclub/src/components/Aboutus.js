import React from 'react'
import ReactPlayer from 'react-player'
import Video from "../video/video1.mp4"
import VideoPlayer from 'react-video-js-player'
import image from '../eventimages/aboutusimage.jpg'
export default function Aboutus() {
    const VideoSrc = Video;

    return (
        <div id="aboutus">
            <h2 className="aboutusheading" id="aboutus">About Us</h2>
            <div className="specialdiv" />
            <div>
           
            <img className="img" style={{width:"400px",height:"270px",marginLeft:"10px"}} src={image}></img>
            <p className="p">Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.Hack Club is a nonprofit network of high school coding clubs and makers around the world.</p>
          </div>
        </div>
    )
}
