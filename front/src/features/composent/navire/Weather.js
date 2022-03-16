import React from 'react';

const weather = () =>{

    function addWeather(event){
        let lattxt =0
        let lontxt=0
        let citytxt="larochelle"
        fetch("https://api.openweathermap.org/data/2.5/onecall?lat=46.160329&lon=-1.151139&exclude=minutely-hourly&appid=aa506f8f976137bd80c5da1deca545af")
            .then((res)=>res.json())
            .then((value)=>{
            let temp = value.daily[0].temp.day;
            let weather=value.daily[0].weather[0].main
        })
            .catch()
    }
    return (
        <>
            <p>{temp}</p>
            <p>{weather}</p>
        </>
)

}
