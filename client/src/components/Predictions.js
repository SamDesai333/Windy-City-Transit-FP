import React from "react";
import "./Prediction.css"

const Predictions = props => (
    <div id="info">
        <p> <span id="routeNum">{props.route}</span> <span id="routeDest">{props.destination}</span><span id="routeTime">{props.predictionTime}</span></p>
    </div>
)

export default Predictions