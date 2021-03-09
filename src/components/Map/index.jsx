import React  from 'react';
import  { MapContainer, TileLayer, GeoJSON, Marker, Popup}  from 'react-leaflet';
import  L  from 'leaflet';
import 'leaflet/dist/leaflet.css';
import alagoasgeo from  '../../data/alagoas.json';

import marcador from './../../assets/images/EU.jpg';
import './styles.css';

const MapIcon = L.icon({
    iconUrl: marcador,
  
    iconSize: [38, 38],
    iconAnchor: [38, 38],
  })

const Map = () =>  {
    return(
        <>  
            <MapContainer className='mapinha'
                
                center={[-9.572873,-37.153327]} 
                zoom={8} 
                style={ { width: '60vw', height: '60vh' , position: 'absolute'}}
                scrollWheelZoom={false}
                
            >
                <GeoJSON  data={alagoasgeo} style={{weight: '0.5'}} /> 

                <TileLayer 
                     attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        // url={ `https://api.mapbox.com/styles/v1/mapbox/dark-v10 /tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}` }

                />

                <Marker position={[-9.5945466,-35.8267652]} icon={MapIcon} className='marcador'>
                     <Popup autoClose>
                            Estação de Maceió.
                     </Popup>
                     <>
                     </>
                </Marker>
                
           </MapContainer>    
           
        </>
        
    );
}

export default Map; 