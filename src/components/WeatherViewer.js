// import axios from "axios"
import React from "react";

function reportWeather() {
    return(
    <>
        <div className="weather">
            <h1>Current Weather</h1>
                <p>
                    The weather at this location is...
                </p>
            {/* // Ideally when the user searches the location, the location will then request the API (for weather) and return the temperature/weather of that searched location */}
        </div>
    </>
    )
}

export default reportWeather;