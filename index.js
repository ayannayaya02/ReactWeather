import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import EngineHW from "./my-app/src/engineHW";

import ReactAnimatedWeather from "react-animated-weather";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Display Weather</h1>
      <p>
        <em>
          <strong>The weather is °F in </strong>{" "}
        </em>
      </p>
      <ReactAnimatedWeather
        icon={"PARTLY_CLOUDY_DAY"}
        color={"black"}
        size={50}
        animate={true}
      />
      <EngineHW city="Paris" />
    </div>
  </StrictMode>
);
