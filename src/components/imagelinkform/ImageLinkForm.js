import React from 'react';
import './ImageLinkForm.css';


const ImageLinkForm = () => {
    return(
        <div>
            <p className= 'f3'>
                {'This magical brain will detect faces in your input url'}
            </p>
            <div className='center'>
                <div className='form center pa4 br2 shadow-5'>
                  <input className= 'f4 pa2 w-70 center' placeholder='drag your url here...' type='text'/>
                  <button className = 'w-30 grow f4 link ph3 pv2 dib white bg-light-purple '>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;