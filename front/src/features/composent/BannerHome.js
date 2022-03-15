import React from 'react';
import '../../assets/style/BannerHome.css'
import logo from '../../assets/img/logo/logo.png';
import museeMaritime from '../../assets/img/museeMaritime.jpeg'

const BannerHome = () => {
    return (
        <>
        <header class="bannerHome">
            <div class="primaryHeader">
                <img src={logo}/>
            </div>
            <div class="secondaryHeader">
                <img src={museeMaritime}/>
                <div>
                    <h1>Bassin à flot histoire et témoignages</h1>
                </div>
            </div>
        </header>
        </>
    );
};

export default BannerHome;