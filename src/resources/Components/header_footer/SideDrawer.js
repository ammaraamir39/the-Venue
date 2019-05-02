import React from 'react';
import { scroller } from 'react-scroll';


import SideDrawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const Drawer = (props) => {
   
   const scrollfunction=(element)=>{
       scroller.scrollTo(element,{
            duration:1500,
            delay:150,
            smooth:true,
            offset:-150,

       })
       props.onClose(false)
   }
   
   
   
   
   
   
    return (
        <SideDrawer
        anchor="right"
        open={props.open}
        onClose= {()=>props.onClose(false) }   
        >
            <List component="nav">
                <ListItem button onClick={() => scrollfunction('featured')} dense={true}>
                        Event Starts in 
                </ListItem>
                <ListItem button onClick={() => scrollfunction('venueinfo')}>
                    Venue NFO
                </ListItem>
                 <ListItem button onClick={()=>scrollfunction('highlights')}>
                    Highlights 
                </ListItem>
                <ListItem button onClick={() => scrollfunction('pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={() => scrollfunction('location')}>
                    Location
                </ListItem>
            
            </List>
        </SideDrawer>

       
        
        

    );
};

export default Drawer;