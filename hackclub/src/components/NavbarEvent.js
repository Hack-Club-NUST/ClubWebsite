import React from 'react'
import event1 from "../eventimages/event1.PNG"
export default function NavbarEvent() {
    return (
        <div id="navbarevent" className="navbar-event">
         <div className="eventcontainer">
                <h1 className="eventheading">Events</h1>
                <div />
            </div>
           <div className="navbar-events-div">
           
                    <div className="event-center">
                
                            <img className="event-image" src={event1} ></img>
                        <div>
                            <h2>Building Cli Apps In Node.Js</h2>
                            <h3>Held On: June 6th 2021</h3>
                            <p>Hack Club NUST brings an amazing opportunity to learn everything you need to know about building CLI(Command Line Interface) applications through the power of Node.js!</p>
                            <a href="https://youtu.be/2NHIYi9rlkQ" target="_blank">
                                <input type="button" value="Event Link" />
                            </a>
                        </div>
                    </div>
            </div>

            <div className="event-space" />

<br/><br/><br/><br/>
            <div className="navbar-events-div">
           
           <div className="event-center">
       
                   <img className="event-image" src={event1} ></img>
               <div>
                                    <h2>Demystifying Career Pathways In It </h2>
                                    <h3>Held On: August 6th 2021</h3>
                                    <p>Hack Club NUST brings an amazing opportunity to meet Ai/Ml Master Hasnain Naeem . A recent graduate of Nust who has been mentoring a lot of students</p>
                                    <a href="https://youtu.be/2NHIYi9rlkQ" target="_blank">
                                        <input type="button" value="Event Link" />
                                    </a>
                                </div>
           </div>
   </div>
   <div className="event-space" />
           




        </div>
    )
}
