import React from 'react';
import {Link, useParams} from 'react-router-dom';
import Button from "@mui/material/Button";
import BannerOtherPage from "../Banner/BannerOtherPage";

const DetailsNavires = (props) => {
    const params = useParams();
    return (
        <>
            <BannerOtherPage title={"Detail du Navires"}/>
            <p>Details Navires</p>
            <p>ID : {params.boatID}</p>
            <Button sx={{
                bgcolor: 'secondary.main'
            }} component={Link} to={"/navires/planning/"+ params.boatID}>Planning</Button>
        </>
    );
};

export default DetailsNavires;