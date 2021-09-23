import React from 'react'
import ContactUslogo from '../eventimages/support-team.png'


export default function ContactUs() {


    return (
        <div id="contact-us" className="container">

<h2 className="text-center contactusheading" id="contact-us-heading">Contact Us</h2>
                <div className="specialdiv"/>

<div className="container">
    <div className="row ">
        
        <div className="col-xs-12 offset-2 d-flex  justify-content-center col-sm-12 col-md-5 contact-us-left-container">


        <form id="contact-form" className="w-100" >
{/* <h4 className="contact-us-heading ">Drop us a message</h4> */}
    <div className="form-group contact-us-name-div w-75">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control " />
    </div>
    <div className="form-group contact-us-email-div w-75">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group contact-us-message-div w-75">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <div className="text-align submit-btn-div w-75">
    <button type="submit" className="btn  submit-btn">Submit</button>
    </div>
</form>

</div>

<div className="col-4 d-none d-sm-none d-md-block contact-us-right-container">


<img src={ContactUslogo} alt="" className="contact-us-image" />

</div>
</div>

            </div>
            </div>
        
         
    )
}