import React  from 'react';
import { WeatherShower } from '@styled-icons/typicons';
import  { MapContainer, TileLayer, GeoJSON}  from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import alagoasgeo from  '../../data/alagoas.json';


const Map = () =>  {
    return(
        <>  
            <MapContainer
                
                center={[-9.572873,-37.153327]} 
                zoom={9} 
                style={ { width: '60vw', height: '60vh' , position: 'absolute'}}
                scrollWheelZoom={false}
                
            >
                <GeoJSON  data={alagoasgeo} style={{weight: '0.5'}} /> 
                <TileLayer 
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/* <TileLayer url={`https://api.mapbox.com/styles/v4/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
           </MapContainer>    
           <WeatherShower/>       
        </>
        
    );
}

export default Map; 