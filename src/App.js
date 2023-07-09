import React, { useState } from "react";
import "./App.css";
import FormattedDate from "./FormattedDate";
import axios from "axios";

export default function App(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "32b60624683015da61e2ddd35066df2b";
    let setCity = "Durban";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="App border border-primary-subtle mt-5 ms-5 me-5">
          <h1>Weather Forecast</h1>
          <h2>
            <FormattedDate date={weatherData.date} />
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-auto">
                <input
                  type="text"
                  class="form-control"
                  id="search-button"
                  placeholder="Search for a city"
                  autocomplete="off"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-auto">
              <button type="submit" class="btn btn-primary mb-3" id="search">
                Search
              </button>
            </div>
          </form>
          <h3>{weatherData.city}</h3>
          <div className="row">
            <div className="col">
              <div className="card border-info mb-3">
                <div className="card-body">
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.description}
                    id="weather-icon"
                  />
                  <span className="temperature" id="current-temperature">
                    {Math.round(weatherData.temperature)}
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card-body">
                <div className="card border-info mb-3">
                  <p className="card-text">
                    <ul>
                      <li
                        className="description text-capitalize"
                        id="weather-description"
                      >
                        {weatherData.description}
                      </li>
                      <li className="wind" id="wind-speed">
                        Wind:{weatherData.wind}
                      </li>
                      <li className="humidity" id="humidity-strength">
                        Humidity: {weatherData.humidity}
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
