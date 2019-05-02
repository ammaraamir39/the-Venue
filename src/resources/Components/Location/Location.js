import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7243.324303173296!2d67.0263339230172!3d24.807019675187107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33da710f83389%3A0x2b1ae3f5b6585172!2sBlock+4+Clifton%2C+Karachi%2C+Karachi+City%2C+Sindh%2C+Pakistan!5e0!3m2!1sen!2s!4v1553076203072" 
            width="100%"
             height="500px" 
             frameBorder="0"
              allowFullScreen></iframe>

            <div className="location_tag">
                <div>Location</div>

            </div>

        </div>
         
    );
};

export default Location;