import React from 'react';
import BannerHome from "../composent/Banner/BannerHome";
import Weather from "../composent/navire/Weather";

const HomePage = () => {
    return (
        <div>
            <BannerHome/>
            <Weather/>
            <h1>page</h1>
        </div>
    );
};

export default HomePage;