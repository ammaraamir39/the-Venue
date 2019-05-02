import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
///import MenuIcon from '@material-ui/icons/MenuIcon';
//import IconButton from '@material-ui/core/IconButton';


import Drawer from './SideDrawer';



class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false,


    } 
    componentDidMount(){
        window.addEventListener('scroll',this.scrollingoptions);
    }

    scrollingoptions=()=>{
        if(window.scrollY > 0){
                this.setState({
                    headerShow:true
                })
        }else{

                this.setState({
                    headerShow: false
                })
        }
    }

    toggleDrawer=(value)=>{
        this.setState({
            drawerOpen:value
        })
    }
    
  
    render() {      
        


        return (
            <div>
                <AppBar
                position="fixed"
                style={{
                    backgroundColor:this.state.headerShow ? '#2f2f2f': 'transparent',
                    boxShadow:'none',
                    padding:'10px 0px'
                }}
                
                >   

                    <Toolbar>
                        <div className="header_logo">
                            <div className="font_righteous header_logo_venue">The Venue</div>
                            <div className="header_logo_title">Musical Events</div>
                        </div>
                       
                        <Button color="inherit" variant="outlined"
                            onClick={() => this.toggleDrawer(true)}
                        >Menu</Button>
                   
                   
                   
                   
                        <Drawer 
                            open={this.state.drawerOpen}
                            onClose={(value)=>this.toggleDrawer(value)}
                        />
                   
                    </Toolbar>

                
                
                
                </AppBar>
            </div>
        );
    }
}

export default Header;