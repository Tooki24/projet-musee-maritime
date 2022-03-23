import React from "react";

import "leaflet/dist/leaflet.css";
import L from "leaflet";


class Map extends React.Component {
  componentDidMount() {
    const mymap = L.map("mapid").setView([46.15021251351839, -1.1514638053383475], 17);

    const url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    L.tileLayer(url).addTo(mymap);

 
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

    const marker = L.marker([46.15021251351839, -1.1514638053383475], { icon: icon }).addTo(
      mymap
    );

    marker.bindPopup("<b>Je suis une popup.").openPopup();

    L.circle([25.03418, 121.564517], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 10
    }).addTo(mymap);
  }

  render() {
    return <div id="mapid" style={{ height: "100vh", width: "100vw" }} />;
  }
}

export default Map;
