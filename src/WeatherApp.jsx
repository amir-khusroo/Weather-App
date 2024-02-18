import SearchBox from './SearchBox'
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function () {
    let [weatherInfo, setWeatherInfo]=useState({
        city: "",
        feelsLike: undefined,
        temp: undefined,
        tempMin: undefined,
        tempMax: undefined,
        humidity: undefined,
        weather: "",
    })
    let updateWeather=(result)=>{
        setWeatherInfo(result);
    }
    return (
        <>
            <h1 style={{ textAlign: "center" }}>Weather App</h1>
            <SearchBox updateInfo={updateWeather}/>
            <InfoBox  info={weatherInfo}/>
        </>
    );

}