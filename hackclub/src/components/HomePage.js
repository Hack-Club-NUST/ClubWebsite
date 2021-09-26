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
             <div className="col-6 textcasediv"> 
             <div className="heroheadingdiv">
                    <h2 className="text-center" > Hack 
                     Club Nust !
                    </h2>
                    </div>


                     <div className="taglinediv">
                        <h5>We are here  to Connect  the Coders <br/> with  Planet Earth</h5>
                        <br/>
                        <div></div>
                        <a href="#aboutus">Learn More</a>

                    </div>
              </div>

              <div className="col-6 showcasingcolumndiv" style={{position:'absolute',right:0,top:'5%',float:'right'}}> 

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