import React from "react";
import "./Prediction.css"

const Predictions = props => (
    <div id="info">
        <p> Route: <span>{props.route}</span> <br/> To: <span>{props.destination}</span> <br/> In <span>{props.predictionTime}</span> Minutes </p>
    </div>
)

export default Predictions