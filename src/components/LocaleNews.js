//import axios from "axios"
import React from "react";

function localNews() {
    return(<>
            <div className="news">
                <h1>Local News</h1>
                <p>
                    Here are some of the news available in this location at this time...
                </p>
                {/* // Upon the user searching a location, the API will then send a get / fetch request and return the some news in that area */}
            </div>
        </>
    )
}


export default localNews;