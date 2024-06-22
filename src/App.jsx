
import './App.css'
import Search from './Components/Search/Search'
import Cards from './Components/Cards/Cards';
import { useEffect } from 'react';
import { useWeather } from './Context/Weather';

function App() {

  let weather_data = useWeather();

  useEffect(() => {
    weather_data.fetchCurrLocationData();
  }, [])

  return (
    <div className='App'>
      <Cards />
    </div>
  )
}

export default App
