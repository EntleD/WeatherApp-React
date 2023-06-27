import React from "react";

export default function Humidity(props) {
  return (
    <div className="Humidity">
      <div> Humidity:{props.humidity}%</div>
    </div>
  );
}
