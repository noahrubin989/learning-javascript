const reviews = [
    {
        destPicture: "img/ao-nang.jpg",
        destName: "Ao Nang",
        destCountry: `Thailand ${String.fromCodePoint(0x1F1F9, 0x1F1ED)}`, // Thai flag emoji Unicode value}`,
        reviewText: "Ao Nang is a popular beach resort town located in Krabi, Thailand. Known for its stunning natural beauty, Ao Nang offers picturesque beaches, limestone cliffs, and crystal-clear waters. It serves as a gateway to nearby attractions such as Railay Beach and the famous Phi Phi Islands, making it a favorite destination for beach lovers and adventure seekers alike.",
        reviewStars: 4
    },
    {
        destPicture: "img/bangkok.jpg",
        destName: "Bangkok",
        destCountry: "Thailand",
        reviewText: "The vibrant capital city of Thailand, Bangkok, is a bustling metropolis known for its ornate temples, bustling street markets, and vibrant nightlife. Explore the iconic Grand Palace, visit the serene Wat Arun temple, and indulge in delicious street food at the famous Chatuchak Weekend Market.",
        reviewStars: 4
    },
    {
        destPicture: "img/chiang-mai.jpg",
        destName: "Chiang Mai",
        destCountry: "Thailand",
        reviewText: "Nestled in the mountains of northern Thailand, Chiang Mai offers a mix of cultural and natural wonders. Explore ancient temples, participate in a traditional Thai cooking class, and experience the famous Yi Peng Lantern Festival where thousands of lanterns light up the night sky.",
        reviewStars: 4
    },
    {
        destPicture: "img/phuket.jpg",
        destName: "Phuket",
        destCountry: "Thailand",
        reviewText: "Thailand's largest island, Phuket, is renowned for its stunning beaches and vibrant nightlife. Relax on the white sands of Patong Beach, visit the iconic Big Buddha, and take a boat tour to the nearby Phi Phi Islands for breathtaking views and snorkeling adventures.",
        reviewStars: 3
    },
]

// Helper function to generate star rating HTML based on the reviewStars value
function generateStarRatingHTML(stars) {
    const starRating = Array.from({ length: stars }, () => '<span class="star"></span>').join('');
    return starRating;
}

function showReview() {
    const review = document.querySelector(".review");
    review.style.opacity = "1";
}


// Populate the content into the HTML elements
function populateReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const randomReview = reviews[randomIndex];
    const pic = document.querySelector(".destination img");
    const destName = document.querySelector(".destination-name");
    const country = document.querySelector(".destination-country");
    const review = document.querySelector(".review-text");
    const stars = document.querySelector(".review-star-rating");
  
    // Hide the review with a fade-out animation
    const reviewContainer = document.querySelector(".destination-whole-container");
    reviewContainer.style.opacity = "0";
  
    setTimeout(() => {
      // Update the stars element with the generated star rating HTML
      stars.innerHTML = generateStarRatingHTML(randomReview.reviewStars);
  
      pic.src = randomReview.destPicture;
      destName.textContent = randomReview.destName;
      country.textContent = randomReview.destCountry;
      review.textContent = randomReview.reviewText;
  
      // Show the review with a fade-in animation
      showReview();
      reviewContainer.style.opacity = "1";
    }, 300); // Adjust the delay time (in milliseconds) as desired
  }


// Call the populateReview function initially to display a random review
populateReview();

// Add an event listener to the "New Food" button to generate a new random review
const newCardBtn = document.querySelector(".new-card-btn");
newCardBtn.addEventListener("click", populateReview);