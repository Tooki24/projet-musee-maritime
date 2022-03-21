import React from 'react';
import BannerHome from "../composent/Banner/BannerHome";
import GetWeather from "../composent/navire/GetWeather";

const HomePage = () => {
    return (
        <div>
            <BannerHome/>
            <GetWeather/>
            <h1>page</h1>
        </div>
    );
};

export default HomePage;