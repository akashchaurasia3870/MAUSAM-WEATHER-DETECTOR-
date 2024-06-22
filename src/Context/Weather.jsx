import { createContext, useContext, useState } from "react";
import { getWeatherDataForCity, getWeatherDataForLocation } from "../API/index.js";

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext);
};

const WeatherProvider = ({ children }) => {
    let [data, setData] = useState([]);
    let [city, setCity] = useState(null);
    let [cordinate, setConrditnate] = useState(null);

    const fetchData = async () => {
        const res = await getWeatherDataForCity(city);
        setData(res);
    };
    const fetchCurrLocationData = async () => {
        console.log("inside fetchCurrLocationData");
        getLocation()
        // window.navigator.geolocation.getCurrentPosition((position) => {
        // console.log(position);
        // return position
        // })
        // const res = await getWeatherDataForLocation(position.coords.latitude, position.coords.longitude);
        // setData(res);

    };

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon);
        getWeatherDataForLocation(lon, lat).then((res) => {
            console.log(res);
            setData(res)
        })

    }

    function showError(error) {
        console.log(error);
        // switch (error.code) {
        //     case error.PERMISSION_DENIED:
        //         console.log("User denied the request for Geolocation.");
        //         break;
        //     case error.POSITION_UNAVAILABLE:
        //         console.log("Location information is unavailable.");
        //         break;
        //     case error.TIMEOUT:
        //         console.log("The request to get user location timed out.");
        //         break;
        //     case error.UNKNOWN_ERROR:
        //         console.log("An unknown error occurred.");
        //         break;
        // }
    }

    return (
        <weatherContext.Provider value={{ data, setData, city, setCity, fetchData, fetchCurrLocationData }}>
            {children}
        </weatherContext.Provider>
    );
};

export default WeatherProvider;
