import React from 'react';
import BannerOtherPage from "../composent/Banner/BannerOtherPage";
import ListNavires from "../composent/navire/ListNavires";
import {Outlet} from "react-router-dom";

const NaviresPage = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default NaviresPage;