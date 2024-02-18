import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "668b149d232bb1f072b51a58e5b2a3da";

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        return result;
    }
    let handleCity = (evt) => {
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            setCity("");
            let result = await getWeatherInfo();
            updateInfo(result);
            setError(false);
        }
        catch (err) {
            setError(true);
        }
    }
    return (
        <>
            <div className='searchBox'>
                <form action="" onSubmit={handleSubmit}>
                    <TextField id="city" label="Enter City" variant="outlined" required value={city} onChange={handleCity} />
                    <br /><br />
                    <Button variant="contained" type='submit'>Search</Button>
                    {error && <p style={{ color: "red" }}>No such place exit !</p>}
                </form>
            </div>
        </>
    )
}