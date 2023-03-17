import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Details from "./Details";


const Map = ({ myIP }) => {
    const position = [myIP?.latitude, myIP?.longitude]


    return (
        <>
            <div className="map-container">
                <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='Your IP!'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position}>
                        <Popup>
                            Browsing from Here!
                        </Popup>
                    </Marker>
                </MapContainer>

            </div>
            <Details myIP={myIP}/>

        </>
    );
}

export default Map;