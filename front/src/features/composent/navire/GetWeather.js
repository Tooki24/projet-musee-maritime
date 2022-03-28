import React, {useEffect, useState} from 'react';
import DisplayWeather from "./DisplayWeather";

const GetWeather = () => {

    const [weather, setWeather] = useState([]);

    useEffect(() => {

        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=46.160329&lon=-1.151139&exclude=minutely-hourly&appid=aa506f8f976137bd80c5da1deca545af")
            .then((res) => res.json())
            .then((value) => {
                setWeather(value.daily);
            })
            .catch((error) => {
                error.log(error)
            })
    }, []);



    return (
        <>

            {
                //condition : si weather est vide, ne renvoie rien, sinon appelle le component DisplayWeather
                weather[0] !== undefined ? <DisplayWeather weather={weather}/>: <></>
            }
        </>
    )

}

export default GetWeather;


