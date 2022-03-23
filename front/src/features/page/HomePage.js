import React from 'react';
import BannerHome from "../composent/Banner/BannerHome";
import InfoMusee from "../composent/musee/InfoMusee";
import GetWeather from "../composent/navire/GetWeather";

const HomePage = () => {
    return (
        <div>
            <BannerHome/>
            <GetWeather/>
            <InfoMusee/>
            <h1>page</h1>
        </div>
    );
};

export default HomePage;