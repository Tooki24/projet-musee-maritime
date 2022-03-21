
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../../../assets/style/weather.css'


const DisplayWeather = (props) => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent id="weather-card">
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Météo du jour
                    </Typography>
                    <Typography variant="h5" component="div">
                        {Math.round((props.weather[0].temp.day)-273.15)} °C

                        <Button id="learn-button" size="small">
                            <img src={"http://openweathermap.org/img/w/" + props.weather[0].weather[0].icon + ".png"}/>
                        </Button>

                        {Math.round((props.weather[1].temp.day)-273.15)} °C


                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default DisplayWeather;