import React from 'react';
import logo from "../../../assets/img/logo/logo.png";
import FilArian from "./FilArian";

const BannerOtherPage = (props) => {
    return (
        <header className="bannerHome">
            <div className="primaryHeader">
                <img src={logo}/>
            </div>
            <div className="secondaryHeader">
                <FilArian title={props.title}/>
            </div>
        </header>
    );
};

export default BannerOtherPage;