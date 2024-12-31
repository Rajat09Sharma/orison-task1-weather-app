import { useState } from "react"
import Navabr from "./components/Navabr"
import Spinner from "./components/Spinner";
import ErrorBox from "./components/ErrorBox";
import WeatherDetail from "./components/WeatherDetail";


function App() {

  const [weatherData, setWeatherData] = useState();
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState();

  function handleWeatherData(data) {
    setWeatherData(data);
  }

  function handleLoading(value) {
    setIsloading(value);
  }

  function handleError(error) {
    setError(error);
  }

  console.log(weatherData);



  return (
    <>
      <Navabr onWeatherData={handleWeatherData} onLoading={handleLoading} onError={handleError} />
      {isLoading && <Spinner />}
      {!isLoading && error && <ErrorBox text={error} />}
      {weatherData && <WeatherDetail weatherData={weatherData} />}
    </>
  )
}

export default App
