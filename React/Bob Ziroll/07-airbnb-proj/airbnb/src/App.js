import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Card from "./components/Card"

import DATA from "./data/data";

import React from "react";


export default function App() {
    
    let cardElements = DATA.map(
        (cardObj)=>{
            return (<Card 
                image={cardObj.image}
                stars={cardObj.stars} 
                reviewCount={cardObj.reviewCount}
                country={cardObj.country} 
                experience={cardObj.experience}
                price={cardObj.price}
            />);
        }
    )
    
    
    return (
        <div>
            <Navbar />
            <Hero />
            {cardElements}
        </div>
    )
}