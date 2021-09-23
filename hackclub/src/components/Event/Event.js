import React from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";

import "./style.css";
import event1 from '../../eventimages/event1.PNG'
const breakPoints = [

    { width: 1, itemsToShow: 1},

    { width: 660, itemsToShow: 2},
  


];


export default function Event() {
    return (
        <>

            <div className="Event" id="Event">
            <div className="eventcontainer-class">
                       
                   
                        <div className="row eventrow">
                            <div className="col-md-4">

                            <div className="row eventscontent">
                                <div className="container eventscontent-container">
                                <div className="col-md-12 eventscontent-column">
                                    <h2 className="text-center">Events  </h2>
                                 <br/><hr className="hr-class"/>
                                    <div className="text-center mx-auto">
                                    <h4 className="eventscontent-paragraph"> Helping Developers All Over The Globe  <span></span></h4>
                                   
                                </div></div>
                            </div>
                            </div>

                            </div>
                            <div className="col-md-8 cardscontainer">
                <Carousel breakPoints={breakPoints}>

    <div>
                                
                                

            <div class="card events-card-home" >

            <div class="card-body">
            <img className="event-image-class" src={event1} ></img>
            <br/><br/>
            <span className="cardcontent">
                <span className="float-left">  <h5 className="card-date">12 Aug,2021</h5></span >
                <span className="float-right">Terminal</span>
            </span>
                <h5 class="card-title"> Building Cli Applications in Node.Js</h5>
                <p class="card-text">   Hack Club NUST brings an amazing opportunity to learn everything you need to know about building CLI(Command Line Interface) applications through the power of Node.js!
            </p>
            
            </div>
            </div>

    </div>


    <div>
                                
                                

                                     <div class="card events-card-home" >
                    
                                <div class="card-body">
                                <img className="event-image-class" src={event1} ></img>
                                <br/><br/>
                                <span className="cardcontent">
                                    <span className="float-left">  <h5 className="card-date">12 Aug,2021</h5></span >
                                    <span className="float-right">Terminal</span>
                                </span>
                                    <h5 class="card-title"> Building Cli Applications in Node.Js</h5>
                                    <p class="card-text">   Hack Club NUST brings an amazing opportunity to learn everything you need to know about building CLI(Command Line Interface) applications through the power of Node.js!
                                </p>
                                
                                </div>
                                </div>
                    
                        </div>

                        <div>
                                
                                

                                     <div class="card events-card-home" >
                    
                                <div class="card-body">
                                <img className="event-image-class" src={event1} ></img>
                                <br/><br/>
                                <span className="cardcontent">
                                    <span className="float-left">  <h5 className="card-date">12 Aug,2021</h5></span >
                                    <span className="float-right">Terminal</span>
                                </span>
                                    <h5 class="card-title"> Building Cli Applications in Node.Js</h5>
                                    <p class="card-text">   Hack Club NUST brings an amazing opportunity to learn everything you need to know about building CLI(Command Line Interface) applications through the power of Node.js!
                                </p>
                                
                                </div>
                                </div>
                    
                        </div>

                        <div>
                                
                                

                                     <div class="card events-card-home" >
                    
                                <div class="card-body">
                                <img className="event-image-class" src={event1} ></img>
                                <br/><br/>
                                <span className="cardcontent">
                                    <span className="float-left">  <h5 className="card-date">12 Aug,2021</h5></span >
                                    <span className="float-right">Terminal</span>
                                </span>
                                    <h5 class="card-title"> Building Cli Applications in Node.Js</h5>
                                    <p class="card-text">   Hack Club NUST brings an amazing opportunity to learn everything you need to know about building CLI(Command Line Interface) applications through the power of Node.js!
                                </p>
                                
                                </div>
                                </div>
                    
                        </div>
                    

                       

                </Carousel>
                </div>                </div>
                <div className="row"></div>
                </div>
            </div>
           
        </>
    )
}

