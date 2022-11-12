import React from "react";
import './Mapa.css'
import location from '../../Img/Location.png';
import loc from '../../Img/Loc.png'

const Mapa = () => {
  return (
    <div className="wrapper-map">
      <div className='contacts-info'>
        <p className="contacts-name">Department name. University Hospital Giessen.</p>
        <p className="contacts-address"><img src={loc} alt='location' style={{width: '15px', height: '15px', opacity: '0.5', marginRight: '5px'}}/>AKH Wien, 1090 Wien, Währinger Gürtel 18-20</p>
        <p className="contacts-phone">+43 (01) 40400-12090</p>
        <p className="contacts-mail">post_akh_diz@akhwien.at</p>
      </div>
      <img src={location} alt="map" className="map"/>
    </div>
  );
};

export default Mapa;
