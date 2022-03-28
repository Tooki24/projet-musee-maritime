import React, {useEffect, useState} from "react";
import "../../assets/style/Map.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';




const Map = () => {
    const [navires, setNavires] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:8000/api/navires.json")
            .then((res) => res.json())
            .then(data => setNavires(data))
            .catch(err => console.log(err));
    }, [])

    // Icon sur la map
    const icon = new L.Icon({
        iconUrl:
            "./map/ship.png",
        shadowUrl:
            "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    });

  return (
      <>
          <MapContainer center={[46.150212513518395, -1.1514638053383475]} zoom={7} className={"mapBoat"}>
              <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {
                  navires.map((navire) => {
                      return(
                          <Marker position={[navire.longitude, navire.latitude]} icon={icon}>
                              <Popup>
                                  {navire.name}
                              </Popup>
                          </Marker>
                      );
                  })
              }

          </MapContainer>
      </>
  );
};


export default Map;


