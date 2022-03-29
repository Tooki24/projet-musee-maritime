import React, {useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import BannerOtherPage from "../Banner/BannerOtherPage";
import Button from "@mui/material/Button";

const DetailsNavires = (props) => {
    const params = useParams();
    const [navire, setNavire] = useState([]);

    React.useEffect(() => {
            fetch("http://localhost:8000/api/navires/" + params.boatID + ".json", {method: "GET"})
                .then((res) => res.json())
                .then((value) => {
                    setNavire(value);
                    console.log(value);
                })
                .catch((error) => {
                    error.log(error)
                })
        }, []
    );


    return (
        <>
            <BannerOtherPage title={"Detail du Navires"}/>
            <h1>{navire.name}</h1>
            <p>{navire.details}</p>
            <p>le proprietaire : {navire.ownerName}</p>
            <p>Année de mise a l'eau : {navire.lauchYear}</p>
            <p>Année de restoration {navire.restoration}</p>
            <p>Longueur : {navire.length}</p>
            <p>Materiaux :{navire.material}</p>
            <p>Type de bateau : {navire.type}</p>
            {navire.isBookable === true ?
                <Button sx={{bgcolor: 'secondary.main'}} component={Link}
                        to={"/navires/planning/" + params.boatID}>Planning</Button>
                : <p>Ce bateau n'est pas disponible a la reservetion </p>}
            {
                navire.image ? (
                    navire.image.map((image, index) => {
                        return <img key={index} src={"http://localhost:3000/img/gallery/navires/" + image.file}
                                    alt={image.name}/>
                    })
                ) : null
            }
            {
                navire.witness ?
                    navire.witness.map((witness, index) => {
                        return <div key={index}><h1>Témoignage n°{index}</h1><p>{witness.file}</p></div>
                    })
                 : null
            }
        </>
    );
};

export default DetailsNavires;