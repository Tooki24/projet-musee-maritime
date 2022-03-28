import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "../../../assets/style/ListNavires.css"
import {Link} from "react-router-dom";
import BannerOtherPage from "../Banner/BannerOtherPage";
import NavireCard from "./NavireCard";
import {useEffect, useState} from "react";
import navireCard from "./NavireCard";

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
