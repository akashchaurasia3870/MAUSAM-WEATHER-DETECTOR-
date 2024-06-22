
const base_url = "https://api.weatherapi.com/v1/current.json?key=0f81e2cbf4484d7187a71809242206";

export const getWeatherDataForCity = async (city) => {
    const response = await fetch(`${base_url}&q=${city}&aqi=yes`);
    return response.json();
}

export const getWeatherDataForLocation = async (lat, lon) => {
    const response = await fetch(`${base_url}&q=${lat},${lon}&aqi=yes`);
    return response.json();
}