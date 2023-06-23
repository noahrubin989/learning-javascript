const values = [
    {   
        id: 1,
        image: 'wedding.jpg',
        stars: 5,
        reviewCount: 8,
        country: "USA",
        experience: "Learn wedding photography with John Doe",
        price: 125,
        openSpots: 30
    },
    {
        id: 2,
        image: 'elephant.jpg',
        stars: 4,
        reviewCount: 100,
        country: "RSA",
        experience: "See elephants on Safari",
        price: 400,
        openSpots: 1
    },
    {
        id: 3,
        image: 'skydive.png',
        stars: 5,
        reviewCount: 12,
        country: "AUS",
        experience: "Fly above the clouds and see the world from a whole new perspective",
        price: 500,
        openSpots: 4
    },
    {
        id: 4,
        image: 'Topgolf.jpg',
        stars: 5,
        reviewCount: 100,
        country: "UAE",
        experience: "Learn how to play golf in a fun and relaxing environment",
        price: 100,
        openSpots: 12
    },
    {
        id: 5,
        image: 'england.jpg',
        stars: 4,
        reviewCount: 1000,
        country: "ENG",
        experience: "Explore London through an expert-guided walking tour!",
        price: 10,
        openSpots: 0
    },
    {
        id: 6,
        image: 'singapore.jpg',
        stars: 5,
        reviewCount: 300,
        country: "SGP",
        experience: "Explore Singapore through a private helicopter tour",
        price: 1000,
        openSpots: 9
    }
];

// Sorts it from most available to least available
const DATA = values.sort((a, b) => b.openSpots - a.openSpots);

export default DATA;