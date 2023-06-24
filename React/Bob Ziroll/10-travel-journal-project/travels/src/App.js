import Navbar from "./components/Navbar";
import Experience from "./components/Experience";

import travelDestinations from "./data/data";
import React from "react";

export default function App() {

    let destinationElements = travelDestinations.map(
        (dest) => {
            return (
                <Experience
                    image={dest.image}
                    destinationName={dest.destinationName}
                    country={dest.country}
                    startDate={dest.startDate}
                    endDate={dest.endDate}
                    description={dest.destinationDescription}
                />
            )
        }
    );

    return (
        <div>
            <Navbar/>
            <section className="destinations d-flex flex-column">
                {destinationElements}
            </section>      
        </div>
    )
}