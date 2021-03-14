import React  from 'react';
import  { MapContainer, TileLayer, GeoJSON}  from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import alagoasgeo from  '../../data/alagoas.json';
import { Container } from './styles';


const Map = () =>  {
    return(
        <>
            <Container>
                <MapContainer
                    center={[-9.572873,-36.523327]} 
                    zoom={9}  
                    style={{ width: '100%', height: '100%' }}
                    scrollWheelZoom={false}
                    
                >
                    <GeoJSON  data={alagoasgeo} style={{weight: '1'}} /> 
                    <TileLayer 
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {/* <TileLayer url={`https://api.mapbox.com/styles/v4/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}/> */}
                </MapContainer>      
            </Container>
        </>   
    );
}

export default Map; 