import React, { useState, useEffect } from "react";

const API_URL = 'https://api.openweathermap.org/data/2.5/weather?';
const ICON_URL = 'http://openweathermap.org/img/wn/';
const API_KEY = 'Add API key here';

export default function Weather({Lat, Lng}) {
    const [Temp, setTemp] = useState(0);
    const [Speed, setSpeed] = useState(0);
    const [Direction, setDirection] = useState(0);
    const [Description, setDiscription] = useState('');
    const [Icon, setIcon] = useState('');

    useEffect(() => {
        const url = API_URL + 'lat=' + Lat + '&lon=' + Lng + '&units=metric' + '&appid=' + API_KEY;

        fetch(url)
        .then(res => res.json())
        .then (
            (result) => {
                if (result.main != undefined) {
                    setTemp(result.main.temp);
                    setSpeed(result.wind.speed);
                    setDirection(result.wind.deg);
                    setDiscription(result.weather[0].description);
                    setIcon(ICON_URL + result.weather[0].icon + '@2x.png');
                } else {
                    alert('Could not read weather information!')
                }
            },(error) => {
                alert(error);
            }
        )
        }, [])

    return (
        <>
            <h3>Weather in your location</h3>
            <p>{Temp} C&#176;</p>
            <p>{Speed} m/s {Direction} degrees</p>
            <p>{Description}</p>
            <img src={Icon} alt=""/>
        </>
    )
}