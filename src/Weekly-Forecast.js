import React, { useState } from "react";
import img from "../src/images/rain-day.png";
import img2 from "../src/images/clear-sky-day.png";
import img3 from "../src/images/scattered-clouds-day.png";
import Temperature from "./Temperature";
import axios from "axios";

export default function weeklyForecast() {
  return (
    <div className="container weeklyForecast d-none">
      <div className="row">
        <div className="col-2">
          <div>Tuesday</div>
          <Temperature temperature={16} />
          <img src={img2} alt="clear-sky" />
          <div class="description">Sky is clear</div>
        </div>
        <div className="col-2">
          <div>Wednesday</div>
          <Temperature temperature={14} />
          <img src={img} alt="rainy-day" />
          <div class="description">Moderate rain</div>
        </div>
        <div className="col-2">
          <div>Thursday</div>
          <Temperature temperature={15} />
          <img src={img} alt="rainy-day" />
          <div class="description">Light rain</div>
        </div>
        <div className="col-2">
          <div>Friday</div>
          <Temperature temperature={17} />
          <img src={img3} alt="scattered-clouds" />
          <div class="description">Scattered clouds</div>
        </div>
        <div className="col-2">
          <div>Saturday</div>
          <Temperature temperature={20} />
          <img src={img2} alt="clear-sky" />
          <div class="description">Sky is is clear</div>
        </div>
        <div className="col-2">
          <div>Sunday</div>
          <Temperature temperature={15} />
          <img src={img3} alt="scattered-clouds" />
          <div class="description">Scattered clouds</div>
        </div>
      </div>
    </div>
  );
}
