import React, {useEffect, useState} from "react";
import "../../../assets/style/ListNavires.css"
import BannerOtherPage from "../Banner/BannerOtherPage";
import NavireCard from "./NavireCard";

const ListNavires = () => {

    const [navires, setNavires] = useState([]);

    useEffect(() => {

        fetch("http://localhost:8000/api/navires.json", {method: "GET"})
            .then((res) => res.json())
            .then((value) => {
                setNavires(value);

            })
            .catch((error) => {
                error.log(error)
            })
    }, []);

    return (
        <>
            <BannerOtherPage title={"Liste de navires"}/>
            <div className="listBato">
                {
                    navires.map((navire) => {
                        return (
                            <NavireCard navire={navire}/>
                        )
                    })
                }
            </div>
        </>
    );
};

export default ListNavires;
