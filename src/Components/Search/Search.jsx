import React from "react";
import { useWeather } from "../../Context/Weather";

const Search = () => {
    const weather_data = useWeather();
    console.log(weather_data);

    return (
        <>
            <div class="mt-6 flex justify-between items-center w-[18rem]">
                <input
                    class="SearchBar p-2 border border-gray-300 rounded-md focus:outline-blue mx-1 w-[95%] -ml-1"
                    placeholder="Search Here ..."
                    value={weather_data.city?.value}
                    onChange={(e) => { weather_data?.setCity(e.target.value) }}
                />
                <button class="Submit p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" onClick={() => { weather_data.fetchData() }}>
                    Search
                </button>
            </div>
        </>
    );
};

export default Search;
