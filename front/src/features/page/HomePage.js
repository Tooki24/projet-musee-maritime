import React from 'react';
import BannerHome from "../composent/Banner/BannerHome";
import InfoMusee from "../composent/musee/InfoMusee";
import GetWeather from "../composent/navire/GetWeather";
const HomePage = () => {
    return (
        <div>
            <BannerHome/>
            <InfoMusee/>
            <GetWeather/>
            <h1>page</h1>
        </div>
    );
};

export default HomePage;