//import axios from "axios"
import React, { useState } from "react";

function TimeComponent() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

    return(
    <>
        <div className="time">
            <h1>Search for the location!</h1>
                <div>
                <input type="text" value={searchTerm} onChange={handleChange} />
                <p>{searchTerm}</p>
                </div>
                <div className="container">
                    <div className="center">
                        <button onClick="">Search
                        </button>
                    </div>
                </div>
        {/* // Create a search bar to search for a location 
        // API usage to collect user input and return the time */}
        </div>
    </>
    )
}

export default TimeComponent;