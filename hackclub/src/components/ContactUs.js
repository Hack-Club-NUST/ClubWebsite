import React from 'react'
import ContactUslogo from '../eventimages/support-team.png'
import AvatarComponent from 'avataaars'
import Avatar from 'avataaars'

export default function ContactUs() {


    return (
        <div id="contact-us" className="container">

          <h2 className="contactusheading" id="contact-us-heading">Contact Us</h2>
              
                <div className="specialdiv" />
               

                <div className="">
                   <div className="row d-flex  justify-content-center">
        
                      <div className="col-xs-12  d-flex  justify-content-center col-sm-12 col-md-6 contact-us-leftmost-container">
       
                          <div class="card" style={{width:'22rem'}}>
                                <div class="card-body">
                                   <h5 style={{color:"#F45947"}} class="card-title">Talk to a member of our Support team</h5>
                                    <Avatar
                                      avatarStyle='Transparent'
                                      topType='Hat'
                                      accessoriesType='Sunglasses'
                                      facialHairType='Blank'
                                      clotheType='GraphicShirt'
                                      clotheColor='Blue03'
                                      graphicType='Hola'
                                      eyeType='Surprised'
                                      eyebrowType='RaisedExcited'
                                      mouthType='Smile'
                                      skinColor='Pale'
                                      style={{marginTop:'5%'}}
                                    />
 
                                    <p class="card-text" style={{marginTop:'10%'}}>   <a href="mailto:hackclub.nust@seecs.edu.pk"> <button className="contactusbutton">
 
                                         Drop A Message</button> </a> </p>

                                  </div>
                              </div>
  

                          </div>

                        <div className="col-xs-12  d-flex  justify-content-center col-sm-12 col-md-6 contact-us-leftmost-container">

                          <div class="card" style={{width:'22rem'}}>
                             <div class="card-body">
                                 <h5 style={{color:"#31303D",fontWeight:"bolder"}} class="card-title text-center">Contact Details</h5>
                                    <br/>

                                    <h6 class="card-text text-center">Hack Club Nust  Email:  </h6>
                                    <p class="card-text text-center" > <a href="mailto:hackclub.nust@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        hackclub.nust@seecs.edu.pk</a>   </p> 

                                    <h6 class="card-text text-center">President:  </h6>
                                    <p class="card-text text-center" > <a href="mailto:mkhaskheli.bese18seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        mkhaskheli.bese18seecs@seecs.edu.pk</a>   </p> 

                                    <h6 class="card-text text-center">Web & It:  </h6>
                                    <p class="card-text text-center" > <a href="mailto:hmehmood.bese18seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        hmehmood.bese18seecs@seecs.edu.pk</a>   </p> 


                                    <h6 class="card-text text-center">General Secretary:  </h6>
                                    <p class="card-text text-center" > <a href="mailto:aqureshi.bese18seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                      aqureshi.bese18seecs@seecs.edu.pk</a>   </p> 


                                    <h6 class="card-text text-center">Treasurer:  </h6>
                                    <p class="card-text text-center" > <a href="mailto:fzaheer.bscs19seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        fzaheer.bscs19seecs@seecs.edu.pk</a>   </p> 

                                    <h6 class="card-text text-center">Press Secretary:  </h6>
                                      <p class="card-text text-center" > <a href="mailto:atariq.bese18seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        fatariq.bese18seecs@seecs.edu.pk</a>   </p> 

                                  <h6 class="card-text text-center">Js To Ps:  </h6>
                                  <p class="card-text text-center" > <a href="mailto:atariq.bese18seecs@seecs.edu.pk" style={{textDecoration:'none',color:'black'}}>
                                        aahmad.Bese18seecs@seecs.edu.pk</a>   </p> 







   




   
    {/* <p class="card-text">   <button className="contactusbutton">Drop A Message</button> </p> */}

                          </div>
                    </div>

{/* <img src={ContactUslogo} alt="" className="contact-us-image" /> */}

</div>
</div>

            </div>
            </div>
        
         
    )
}