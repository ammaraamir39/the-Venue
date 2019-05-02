import React from 'react';
import Button from '@material-ui/core/Button';

import Ticket from '../featured/images/icons/ticket.png';



const MyButton = (props) => {
    return (
        <Button
            variant="contained"
            
            style={{
                background: props.bck,
                color: props.color
                        }}
            href={props.link}
        >
                <img
                    src={Ticket}
                    className="iconImage"
                    alt="iconbutton"
                />
            {props.Text}
        </Button>     
        
    );
};

export default MyButton;