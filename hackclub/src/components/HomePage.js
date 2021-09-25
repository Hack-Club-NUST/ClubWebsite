import React from 'react'
import Event from './Event/Event'
import ContactUs from './ContactUs'
import Team from './Team'
import Aboutus from './Aboutus'

export default function HomePage() {
    return (
        <div id="home">
            <div className="homecontainer">

                <div className="row showcasediv" style={{marginRight:'0px'}}>
                    <div className="col-md-6 textcasediv"> 
                        <h2 className="text-center" > Hack 
                            Club Nust !</h2>
                    <div className="taglinediv">
                       <h5>We are here  to Connect  the Coders <br/> with  Planet Earth</h5>
                        <br/>
                        <div></div>
                        <button className=" ">Learn More</button>

                    </div>
              

                
                
                 </div>
                

                </div>

            </div>
            <Event />
            <Team />
            <Aboutus/>
            <ContactUs />

        </div>
    )
}