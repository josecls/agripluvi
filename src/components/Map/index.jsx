import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, GeoJSON, Marker, useMapEvents, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import alagoasgeo from '../../data/alagoas.json';
import { Container } from './styles';

const Map = () => {
    const [position, setPosition] = useState([-9.672873, -36.523327])

    const LocationMarker = () => {
        const map = useMapEvents({})

        map.on('click', (e) => {
            setPosition(e.latlng)
            map.flyTo(e.latlng, undefined)
        });

        function locateUser() {
            map.locate({ setView: true, enableHighAccuracy: true })
                .on('locationfound', (e) => {
                    setPosition(e.latlng)
                })
        }

        locateUser()

        return position === null ? null : (
            <Marker position={position} draggable>
                <Popup>Você está aqui</Popup>
            </Marker>
        )
    }

    useEffect(() => {
        const SetInitialConfig = () => {
            const DefaultIcon = L.icon({
                iconUrl: icon,
                shadowUrl: iconShadow,
            });

            L.Marker.prototype.options.icon = DefaultIcon;
        }

        SetInitialConfig()
    })
    return (
        <>
            <Container>
                <MapContainer
                    center={[-9.672873, -36.523327]}
                    zoom={9}
                    style={{ width: '100%', height: '100%', position: 'relative', minHeight: '600px' }}
                    scrollWheelZoom={false}
                    fadeAnimation
                    zoomAnimation
                >
                    <GeoJSON data={alagoasgeo} style={{ weight: '1' }} />
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker position={position} />
                </MapContainer>
            </Container>
        </>
    );
}

export default Map;