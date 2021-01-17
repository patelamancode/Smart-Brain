import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png';
import './Logo.css';

const Logo = () => {
    return(
        <div className= 'ma3 mt2'>
           <Tilt className="Tilt br2 shadow-3" options={{ max : 55 }} style={{ height: 100, width: 100 }} >
             <div className="Tilt-inner pa3 "><img style={{paddingTop: '3px'}} alt='logo' src ={brain}/></div>
           </Tilt>
        </div>
    );
}


export default Logo;

// logo.png came from "icons8.com"
// tilt is use for special effects like hover