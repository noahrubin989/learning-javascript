import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"
import React from "react";


export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                stars={5} 
                country={"USA"} 
                experience={"Learn wedding photography"}
                price={125}
            />
        </div>
    )
}