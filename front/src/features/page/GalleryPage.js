import React from 'react';
import BannerOtherPage from "../composent/Banner/BannerOtherPage";
import '../../assets/style/Gallery.css'
import GalleryImage from "../composent/Gallery/GalleryImage";

const GalleryPage = () => {
    return (
        <div>
            <BannerOtherPage title={"Gallery Images"}/>
            <div className={"gallery-img"}>
                <GalleryImage/>
            </div>
        </div>
    );
};

export default GalleryPage;