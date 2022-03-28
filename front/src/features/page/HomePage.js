import React from 'react';
import BannerHome from "../composent/Banner/BannerHome";
import InfoMusee from "../composent/musee/InfoMusee";
import GetWeather from "../composent/navire/GetWeather";
import Map from "../composent/Map";

const HomePage = () => {
    return (
        <div className={"home"}>
            <BannerHome/>
            <GetWeather/>
            <InfoMusee/>
            <Map />
        </div>
    );
};

export default HomePage;