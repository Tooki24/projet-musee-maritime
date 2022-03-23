import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../../assets/style/weather.css'
import {useState} from "react";
import {CardActions} from "@mui/material";
import App from "../../../App";
import ReactDOM from 'react-dom';


const DisplayWeather = (props) => {

    const [isWeather, setIsWeather] = useState(0)
    const [displayWeather , setDisplayWeather] = useState({display:'none'});


    const displayMore = () => {
        console.log(displayWeather)

        if (isWeather === 0) {
            setDisplayWeather({display: 'flex'});
            setIsWeather(1);

        }
        else {
            setIsWeather(0)
            setDisplayWeather({display: 'none'});
        }
    }

    return (
        <div>
            <Card sx={{minWidth: 275}}>
                <CardContent id="weather-card">
                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                        Météo du jour
                    </Typography>
                    <Typography id="meteo" variant="h5" component="div">
                        {Math.round((props.weather[0].temp.day) - 273.15)} °C
                        <img src={"http://openweathermap.org/img/w/" + props.weather[0].weather[0].icon + ".png"}/>

                        <span style={displayWeather}>{Math.round((props.weather[1].temp.day) - 273.15)}°C</span>
                        <img style={displayWeather} src={("http://openweathermap.org/img/w/" + props.weather[1].weather[0].icon + ".png")}/>
                        <span style={displayWeather}>{Math.round((props.weather[1].temp.day) - 273.15)}°C</span>
                        <img style={displayWeather} src={("http://openweathermap.org/img/w/" + props.weather[1].weather[0].icon + ".png")}/>

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