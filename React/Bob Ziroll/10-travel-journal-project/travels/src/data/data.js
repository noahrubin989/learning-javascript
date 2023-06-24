import moment from "moment";

const data = [
    {
      image: "phuket.jpg",
      destinationName: 'Phuket',
      destinationDescription: 'A beautiful island known for its stunning beaches and vibrant nightlife.',
      country: 'Thailand',
      startDate: '2023-07-01',
      endDate: '2023-07-07'
    },
    {
      image: "ao-nang.jpg",
      destinationName: 'Ao Nang',
      destinationDescription: 'A coastal town offering breathtaking views, rock climbing, and island hopping opportunities.',
      country: 'Thailand',
      startDate: '2023-07-08',
      endDate: '2023-07-14'
    },
    {
      image: "koh-phangan.jpg",
      destinationName: 'Koh Phangan',
      destinationDescription: 'Ko Pha Ngan is an island in southeast Thailand that’s renowned for its monthly Full Moon Party. This boisterous night-long celebration, which is tied to the lunar calendar, draws revelers to its southeastern peninsula, Haad Rin. Most festivities center on Sunrise Beach, whose beach bungalows attract a backpacker crowd. On the north coast lie quieter, white-sand beaches including Hat Khuat and Hat Thian.',
      country: 'Thailand',
      startDate: '2023-07-15',
      endDate: '2023-07-21'
    },
    {
      image: "melbourne.jpg",
      destinationName: 'Melbourne',
      destinationDescription: 'A vibrant city known for its café culture, street art, and beautiful gardens.',
      country: 'Australia',
      startDate: '2023-08-01',
      endDate: '2023-08-07'
    },
    {
      image: "brisbane.jpg",
      destinationName: 'Brisbane',
      destinationDescription: 'A laid-back city with a thriving music and arts scene, surrounded by natural beauty.',
      country: 'Australia',
      startDate: '2023-08-08',
      endDate: '2023-08-14'
    },
    {
      image: "london.jpg",
      destinationName: 'London',
      destinationDescription: 'An iconic city with a rich history, world-class museums, and famous landmarks.',
      country: 'United Kingdom',
      startDate: '2023-09-01',
      endDate: '2023-09-07'
    },
    {
      image: "paris.jpg",
      destinationName: 'Paris',
      destinationDescription: "The City of Love, known for its romantic atmosphere, stunning architecture, and gourmet food. Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré",
      country: 'France',
      startDate: '2023-09-08',
      endDate: '2023-09-14'
    },
    {
      image: "tel-aviv.webp",
      destinationName: 'Tel Aviv',
      destinationDescription: 'A modern and cosmopolitan city with stunning beaches and a lively nightlife.',
      country: 'Israel',
      startDate: '2023-11-01',
      endDate: '2023-11-07'
    },
    {
      image: "berlin.jpg",
      destinationName: 'Berlin',
      destinationDescription: 'A vibrant and multicultural city with a thriving nightlife and a rich history.',
      country: 'Germany',
      startDate: '2023-10-01',
      endDate: '2023-10-07'
    },
    {
      image: "amsterdam.jpg",
      destinationName: 'Amsterdam',
      destinationDescription: 'Famous for its picturesque canals, historic buildings, and vibrant cultural scene.',
      country: 'Netherlands',
      startDate: '2023-10-08',
      endDate: '2023-10-14'
    }
];

// Preprocess the dates in the travelDestinations array
const dataCleaned = data.map(destination => ({
  ...destination,
  startDate: moment(destination.startDate).format("MMM DD, YYYY"),
  endDate: moment(destination.endDate).format("MMM DD, YYYY")
}));

// Sort the data by starting date
let travelDestinations = dataCleaned.sort((a, b) =>
  moment(a.startDate).diff(moment(b.startDate))
);


export default travelDestinations;
  

  