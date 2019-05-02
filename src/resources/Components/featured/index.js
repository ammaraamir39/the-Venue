import React from 'react';
import Caroussel from './Caroussel'
import CountDown from './CountDown';

const Featured = () => {
    return (
        <div style={{ position: 'relative' }}>


            <Caroussel/>

            <div className="artist_name">
                <div className="wrapper">
                    Ariana Grande
                </div>
            </div>
            <CountDown/>
        </div>
    );
};

export default Featured;
