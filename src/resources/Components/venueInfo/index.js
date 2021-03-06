import React from 'react';
import Zoom from 'react-reveal/Zoom'


import icon_calendar from '../featured/images/icons/calendar.png';
import icon_location from '../featured/images/icons/location.png';

const Venue = () => {
    return (
        <div className="bck_black">
            <div className="centre_wrapper">
                <div className="vn_wrapper">
                     
                     <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                        style={{ background: `url(${icon_calendar})` }}

                                    ></div>
                                    <div className="vn_title">
                                        Event date and tiime
                                </div>
                                    <div className="vn_desc">
                                        13th Aug 2019 , 7:00 pm
                                </div>
                                </div>

                            </div>
                        </div>


                     
                     </Zoom>
                     <Zoom duration={500} delay={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div className="vn_icon"
                                        style={{ background: `url(${icon_location})` }}

                                    ></div>
                                    <div className="vn_title">
                                        Event Location
                                </div>
                                    <div className="vn_desc">
                                        Defence Phase VII ,Karachi
                                </div>
                                </div>

                            </div>



                        </div>

                     
                     </Zoom>
                    

                                    
                </div>
            </div>
            
        </div>
    );
};

export default Venue;