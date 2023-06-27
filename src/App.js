import img2 from "../src/images/clear-sky-day.png";
import Temperature from "./Temperature";
import Wind from "./Wind";
import Humidity from "./Humidity";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="App border border-primary-subtle mt-5 ms-5 me-5">
        <h1>Weather Forecast</h1>
        <h2>Last updated: Tuesday 17:21 </h2>
        <form className="row g-3">
          <div className="col-auto">
            <input
              type="text"
              class="form-control"
              id="search-button"
              placeholder="Search for a city"
              autocomplete="off"
            />
          </div>
          <div className="col-auto">
            <button type="submit" class="btn btn-primary mb-3" id="search">
              Search
            </button>
          </div>
        </form>
        <h3>Cape Town</h3>
        <div className="row">
          <div className="col">
            <div className="card border-info mb-3">
              <div className="card-body">
                <img src={img2} alt="clear-sky" id="weather-icon" />
                <span>
                  <Temperature temperature={19} id="temperature" />
                </span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <div className="card border-info mb-3">
                <p className="card-text">
                  <ul>
                    <li className="description" id="weather-description">
                      Clear Sky
                    </li>
                    <li>
                      <Wind wind={10} id="wind-bar" />
                    </li>
                    <li>
                      <Humidity humidity={86} id="humidity" />
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
        <WeeklyForecast />
      </div>
    </div>
  );
}
