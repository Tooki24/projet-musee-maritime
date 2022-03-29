import React, {useEffect, useState} from 'react';
import BannerOtherPage from "../composent/Banner/BannerOtherPage";
import {Outlet, useParams} from "react-router-dom";
import InfoNavire from "../composent/planning/InfoNavire";
import CrenelsBoat from "../composent/planning/CrenelsBoat";

const PlanningPage = () => {
    const params = useParams();
    const [navire, setNavire] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/api/navires/"+params.boatID+".json")
            .then((res) => res.json())
            .then((value) =>{setNavire(value)})
            .catch((err) => {console.log('tte')})
    }, [])
    return (
        <>
            <BannerOtherPage title={"Planning"}/>
            <div className={"pagePlanning"}>
                {
                    navire ==! [] ? (null) : (<InfoNavire navire={navire}/>)
                }
                <CrenelsBoat/>
            </div>
            <Outlet/>

        </>
    );
};

export default PlanningPage;