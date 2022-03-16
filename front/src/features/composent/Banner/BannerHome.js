import React from 'react';
import '../../../assets/style/Banner.css'
import logo from '../../../assets/img/logo/logo.png';
import museeMaritime from '../../../assets/img/museeMaritime.jpeg'
import FilArian from "./FilArian";

const BannerHome = () => {
    return (
        <>
        <header className="bannerHome">
            <div className="primaryHeader">
                <img src={logo}/>
            </div>
            <div className="secondaryHeader">
                <img src={museeMaritime}/>
                <FilArian title={'Bassin à flot histoire et témoignages'}/>
            </div>
        </header>
        </>
    );
};

export default BannerHome;