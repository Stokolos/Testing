import React from 'react';
import Bitmap from '../../Img/Bitmap.png'
import Bitmap1 from '../../Img/Bitmap1.png'
import Bitmap2 from '../../Img/Bitmap2.png'
import './AttachedImages.css'

const AttachedImages = () => {
    return (
        <>
            <h2 className='attached-images'>Attached images</h2>
            <div className='wrapper-images'>
            <img src={Bitmap} alt="img" className='photo'/>
            <img src={Bitmap1} alt="img" className='photo' style={{marginLeft: '20px'}}/>
            <img src={Bitmap2} alt="img" className='photo' style={{marginLeft: '20px'}}/>
            </div>
        </>
    );
};

export default AttachedImages;