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
                image={"wedding.jpg"}
                stars={5} 
                reviewCount={8}
                country={"USA"} 
                experience={"Learn wedding photography with John Doe"}
                price={125}
            />
        </div>
    )
}