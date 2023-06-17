export const generateSnapshots = (countries) => {
    const container = document.getElementById("card-container");
  
    countries.forEach(country => {
        const cardContainer = document.createElement("div");
        cardContainer.className = "col-lg-3 col-md-4 col-sm-6 col-xs-12";

        const card = document.createElement("div");
        card.className = "card mb-4 shadow-sm h-100";

        const image = document.createElement("img");
        image.className = "card-img-top";
        image.src = country.flagSrc;
        image.srcset = country.flagSrcset;
        image.width = 320;
        image.alt = country.name;

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.textContent = country.name;

        const cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.textContent = country.description;

        const link = document.createElement("a");
        [link.href, link.className, link.textContent, link.href, link.target] = [
            country.buttonLink, 
            "btn btn-dark", 
            `Explore ${country.name}`, 
            `https://www.lonelyplanet.com/${country.name.toLowerCase()}`,
            "_blank"
        ];

        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardText);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        cardContainer.appendChild(card);

        container.appendChild(cardContainer);
    });
  }
  


export const COUNTRIES = [
    {
        name: "Thailand",
        flagSrc: "https://flagcdn.com/w320/th.png",
        flagSrcset: "https://flagcdn.com/w640/th.png 2x",
        description: "Thailand is a country in Southeast Asia renowned for its vibrant cities, stunning beaches, ornate temples, and flavorful cuisine.",
    },
    {
        name: "Laos",
        flagSrc: "https://flagcdn.com/w320/la.png",
        flagSrcset: "https://flagcdn.com/w640/la.png 2x",
        description: "Laos is a landlocked country in Southeast Asia known for its mountainous terrain, Buddhist monasteries, and rich cultural heritage.",
    },
    {
        name: "Vietnam",
        flagSrc: "https://flagcdn.com/w320/vn.png",
        flagSrcset: "https://flagcdn.com/w640/vn.png 2x",
        description: "Vietnam is a Southeast Asian country known for its rich history, breathtaking landscapes, diverse culture, and delicious cuisine.",
    },
    {
        name: "Cambodia",
        flagSrc: "https://flagcdn.com/w320/kh.png",
        flagSrcset: "https://flagcdn.com/w640/kh.png 2x",
        description: "Cambodia is a Southeast Asian nation famous for its ancient temples, including the magnificent Angkor Wat, vibrant cultural heritage, and warm hospitality.",
    },
    {
        name: "Indonesia",
        flagSrc: "https://flagcdn.com/w320/id.png",
        flagSrcset: "https://flagcdn.com/w640/id.png 2x",
        description: "Indonesia, the largest archipelago in the world, offers a wide range of experiences from pristine beaches and tropical rainforests to ancient temples and bustling cities.",
    },
    {
        name: "Singapore",
        flagSrc: "https://flagcdn.com/w320/sg.png",
        flagSrcset: "https://flagcdn.com/w640/sg.png 2x",
        description: "Singapore, a modern city-state and global financial hub, offers a unique blend of luxurious shopping, culinary delights, futuristic architecture, and lush green spaces.",
    },
    {
        name: "Philippines",
        flagSrc: "https://flagcdn.com/w320/ph.png",
        flagSrcset: "https://flagcdn.com/w640/ph.png 2x",
        description: "The Philippines, an archipelago of stunning tropical islands, offers a paradise for nature lovers, adventure seekers, and those seeking a rich cultural experience.",
    },
    {
        name: "Malaysia",
        flagSrc: "https://flagcdn.com/w320/my.png",
        flagSrcset: "https://flagcdn.com/w640/my.png 2x",
        description: "Malaysia, a multicultural country in Southeast Asia, is renowned for its bustling cities, stunning landscapes, diverse cuisine, vibrant cultural festivals, and a harmonious blend of modernity and traditional charm.",
    },

];
  



/* <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/th.png" srcset="https://flagcdn.com/w640/th.png 2x" width="320" alt="Thailand">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/la.png" srcset="https://flagcdn.com/w640/la.png 2x" width="320" alt="Laos">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/vn.png" srcset="https://flagcdn.com/w640/vn.png 2x" width="320" alt="Vietnam">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/kh.png" srcset="https://flagcdn.com/w640/kh.png 2x" width="320" alt="Cambodia">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/id.png" srcset="https://flagcdn.com/w640/id.png 2x" width="320" alt="Indonesia">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/sg.png" srcset="https://flagcdn.com/w640/sg.png 2x" width="320" alt="Singapore">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/ph.png" srcset="https://flagcdn.com/w640/ph.png 2x" width="320" alt="Philippines">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-4 shadow-sm h-100">
                        <img class="card-img-top" src="https://flagcdn.com/w320/my.png" srcset="https://flagcdn.com/w640/my.png 2x" width="320" alt="Malaysia">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-dark">Go somewhere</a>
                        </div>
                    </div>
                </div> */