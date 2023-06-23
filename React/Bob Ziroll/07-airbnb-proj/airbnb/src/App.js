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
                openSpots={cardObj.openSpots}
            />);
        }
    )
    
    
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="media-scroller snaps-inline mb-4">
                {cardElements}
            </section>
            
        </div>
    )
}