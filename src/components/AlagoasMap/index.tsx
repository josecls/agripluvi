import React, { useState } from 'react';
//import { WeatherShower } from '@styled-icons/typicons';
import  { MapContainer, TileLayer, Marker, Popup, useMapEvents }  from 'react-leaflet';
import 'leaflet/dist/leaflet.css';


const AlagoasMap: React.FC = () => {
    return(
        <>
            <MapContainer 
                center={[-9.572873,-37.153327]} 
                zoom={8} 
                style={ { width: '100%', height: '100%' , position: 'absolute' }}
                scrollWheelZoom={false}
                
            >
                <TileLayer 
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <TileLayer url={`https://api.mapbox.com/styles/v4/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
           </MapContainer>
           
        </>
        
    );
}

export default AlagoasMap; 

