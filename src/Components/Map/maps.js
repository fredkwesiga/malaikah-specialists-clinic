import React from 'react';
import './maps.css'



const Maps = () => {

    return (
        <div className="mapFrame">
            <h2 style={{ textAlign: 'center' }}>Visit Us!</h2>
            <iframe
                title="Visit us at Malaikah Specialists"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.5398798879737!2d9.004748614824038!3d7.405337914337585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105a17f8ceafa0fb%3A0xbfa0d33742557215!2sMalaika%20Group%20Inc!5e0!3m2!1sen!2sug!4v1635861008300!5m2!1sen!2sug"
                style={{
                    width: '100%',
                    height: '100%',
                    margin: 'auto',
                }}
            ></iframe>
        </div>
    );

}
export default Maps;