import React from 'react';

const Weather = () =>{
    let temp=0
    let weather=0
        console.log("salut")
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=46.160329&lon=-1.151139&exclude=minutely-hourly&appid=aa506f8f976137bd80c5da1deca545af")
            .then((res)=>res.json())
            .then((value)=>{
            temp = value.daily[0].temp.day;
            weather=value.daily[0].weather[0].main
            console.log(temp+" "+weather+"oui bonjour")
        })
            .catch((error) => {
        error.log(error)
    })
    console.log(temp+" "+weather)
    return (
        <>
            <p>{temp}</p>
            <p>{weather}</p>
        </>
)

}

export default Weather;