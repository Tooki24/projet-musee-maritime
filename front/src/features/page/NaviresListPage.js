import React from 'react';
import BannerOtherPage from "../composent/Banner/BannerOtherPage";
import ListNavires from "../composent/navire/ListNavires";

const NaviresListPage = () => {
    return (
        <div>
            <BannerOtherPage title={"Liste de navires"}/>
            <ListNavires/>

        </div>
    );
};

export default NaviresListPage;