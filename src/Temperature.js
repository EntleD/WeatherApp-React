import React from "react";

export default function Temperature(props) {
  return (
    <div className="Temperature">
      <div> {props.temperature}°C | °F</div>
    </div>
  );
}
