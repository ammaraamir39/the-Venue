import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import Button from '../reusable/MyButton';


class Discount extends Component {
   state={
       DiscountStart:0,
       DiscountEnd:30
   }
   porcentageset=()=>
   {
       if(this.state.DiscountStart<this.state.DiscountEnd){
            this.setState({
                DiscountStart:this.state.DiscountStart+1

            })
       }
   }
   componentDidUpdate(){
        setTimeout(()=>{
            this.porcentageset()
        },30)
   } 
   
   
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">
                    
                     <Fade 
                     onReveal={()=>this.porcentageset()}
                     >   
                    <div className="discount_porcentage">
                        <span>{this.state.DiscountStart}%</span>
                        <span>off</span>
                      </div>
                      </Fade>

                        <Slide right>   
                    <div className="discount_description">
                        <h3>Purchase ticketss</h3>
                        <p>Purcahse your tickets before 12th june .......</p>


                      <Button
                        Text="Purchase Tickets"
                        bck="#ffa800"
                        color="#ffffff"
                        link="https://classroom.google.com/h"
                      />

                    </div>
                    </Slide>
                </div>
                
            </div>
        );
    }
}

export default Discount;