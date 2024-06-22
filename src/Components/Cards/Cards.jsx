import React from 'react'
import { useWeather } from "../../Context/Weather";
import Search from '../Search/Search';

function Cards() {

    const weather_data = useWeather();
    console.log(weather_data?.data);

    function formatDate(dateString) {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options);
    }
    const inlineStyles = {
        fontFamily: "'Hanalei Fill', system-ui",
        fontWeight: 400,
        fontStyle: "normal"
    };

    return (
        <div class="flex flex-col items-center justify-center h-screen bg-gray-100 bg3">
            <div className='mb-5'>
                <span className='text-6xl text-black-500' style={inlineStyles}>MAUSAM</span>
            </div>
            <div class="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div class="w_head p-4 bg-blue-500 text-white bg">
                    <div class="date text-center">
                        {formatDate(weather_data?.data?.location?.localtime)}
                    </div>
                </div>
                <div class="w_mid p-6">
                    <div class="Cloudy flex flex-col items-center justify-center -mt-2">
                        <div>
                            <img src={weather_data?.data?.current?.condition.icon} class="" />
                        </div>
                        <span class="text-gray-600 text-sm">{weather_data?.data?.current?.condition.text}</span>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-4 -mt-4'>
                    <div class="temp text-4xl font-bold text-gray-800">
                        {weather_data?.data?.current?.temp_c}°C
                    </div>

                    <div class="City text-xl text-gray-600">
                        {weather_data?.data?.location?.name}
                    </div>
                </div>
                <div class="w_bottom p-4 bg-gray-300 flex justify-around text-gray-800 bg">
                    <div class="wind_speed flex flex-col items-center mx-3">
                        <span class="text-xl font-semibold">{weather_data?.data?.current?.wind_kph} kph</span>
                        <span>wind</span>
                    </div>
                    <div class="humidity flex flex-col items-center mx-3">
                        <span class="text-xl font-semibold">{weather_data?.data?.current?.humidity}</span>
                        <span>Humidity</span>
                    </div>
                    <div class="vis_km flex flex-col items-center mx-3">
                        <span class="text-xl font-semibold">{weather_data?.data?.current?.vis_km} km</span>
                        <span>Visibility</span>
                    </div>
                </div>
            </div>
            <Search />
        </div>
    )
}

export default Cards