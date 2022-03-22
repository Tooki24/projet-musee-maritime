
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../../assets/style/weather.css'
import {useState} from "react";
import {CardActions} from "@mui/material";



const DisplayWeather = (props) => {
    
    const [nexttemp1, setNexttemp1] = useState(undefined);
    const [nextweather1, setNextWeather1] = useState(undefined);
    const [nexttemp2, setNexttemp2] = useState(undefined);
    const [nextweather2, setNextWeather2] = useState(undefined);

    const displayMore=()=>{
        /*return(

            <p>{Math.round((props.weather[1].temp.day)-273.15)} °C</p>
        )*/
        console.log("displaymore")
        setNexttemp1(Math.round((props.weather[1].temp.day)-273.15))
        setNextWeather1("http://openweathermap.org/img/w/" + props.weather[1].weather[0].icon + ".png")

        setNexttemp2(Math.round((props.weather[2].temp.day)-273.15))
        setNextWeather2("http://openweathermap.org/img/w/" + props.weather[2].weather[0].icon + ".png")
    }

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent id="weather-card">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Météo du jour
                    </Typography>
                    <Typography id="meteo" variant="h5" component="div">
                        {Math.round((props.weather[0].temp.day)-273.15)} °C
                        <img src={"http://openweathermap.org/img/w/" + props.weather[0].weather[0].icon + ".png"}/>
                        {nexttemp1 !== undefined ? <span>{nexttemp1}°C</span>: <></>}
                        {nextweather1 !== undefined ? <img src={nextweather1}/>: <></>}
                        {nexttemp2 !== undefined ? <span>{nexttemp2}°C</span>: <></>}
                        {nextweather2 !== undefined ? <img src={nextweather2}/>: <></>}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button
                        id="learn-button"
                        size="small"
                        onClick={displayMore}>
                        Voir Plus
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default DisplayWeather;