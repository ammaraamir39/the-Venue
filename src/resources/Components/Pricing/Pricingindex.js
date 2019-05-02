 import React, { Component } from 'react';
 import Button from '../reusable/MyButton';

import Zoom from 'react-reveal/Zoom';



 
 class Pricingindex extends Component {
     
    state={
        prices:[100,150,250],
        positions:['Balcony','Medium','Star'],
        desc: ['The theatre seats feature ample room so that people of different sizes can sit easily and comfortably. Companies like Octane Seating, Palliser',
            'a passage between rows of seats, for example in a church, theatre, or plane, or between the ... theatre the part of a theatre, cinema etc where the audience sits ...',
            'All of this pristine sound is then pumped into a theatre that has been customized for an optimal ... But seeing a movie in an IMAX® theatre is so much more.'
                ],
        link:['https://www.google.com/pk','https://www.facebook.com','https://www.youtube.com'],
        delay:[500,0,500]
    }

    showBoxes=()=>(
        this.state.prices.map((box,i)=>(
           <Zoom delay={this.state.delay[i]}>
               <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title"> 
                            <span>{this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>
                        <div className="pricing_description">
                            {this.state.desc[i]}
                        </div>
                        <div className="pricing_buttons">
                            <Button
                                Text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.link[i]}
                                
                            />
                        </div>

                    </div>


                </div>
            </Zoom>
        ))

    )
    
    
    
    render() {
         return (
             <div className="bck_black">
                 <div className="center_wrapper  pricing_section">
                    
                    <h2>Pricing</h2>
                    <div className="pricing_wrapper">
                        {this.showBoxes()}
                    </div>


                 </div>
             </div>
         );
     }
 }
 
 export default Pricingindex;