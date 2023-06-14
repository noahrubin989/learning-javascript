const renderFavoriteTools = (favTools) => {
    return favTools.map((tool, index) => (
        // console.log(true && 'hi') returns 'hi'
        // console.log(false && 'hi') returns false
        <span key={index}>
            {tool}
            {index !== favTools.length - 1 && ", "}
        </span>
    ));
};

function HeadingContainer(props) {
    return (<header>
        <div className="container">
            <div className="d-flex justify-content-center border-bottom border-dark mt-2">
                <nav>
                    <a className="me-3 py-2 link-dark text-decoration-none" href="https://www.linkedin.com/in/noah-rubin1/" target="_blank">LinkedIn</a>
                    <a className="me-3 py-2 link-dark text-decoration-none" href="https://github.com/noahrubin989" target="_blank">GitHub</a>
                    <a className="me-3 py-2 link-dark text-decoration-none" href="https://www.youtube.com/channel/UCB_bKf_dqJEUf2_sZC_RGpQ" target="_blank">YouTube</a>
                </nav>
            </div>
            <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
                <h3 className="display-4 fw-normal text-body-emphasis">Facts About Me</h3>
                <img className="border-dark rounded-circle custom-image" src="img/photo.jpeg" alt="My Photo"></img>
                <h4 className="fs-5 text-body-secondary">By {props.name}</h4>
            </div>
        </div>
    </header>)
}

function FactsContainer(props) {
  return (
    <ul>
        <li>Is {props.age} years old</li>
        <li>Has {props.numPets} {props.numPets === 1 ? 'pet' : 'pets'}</li>
        <li>Lives in {props.cityName}</li>
        <li>Favourite parts of Web Development: {renderFavoriteTools(props.favTools)}</li>
    </ul>
  );
}

ReactDOM.render(
    <div>
        <HeadingContainer name="Noah Rubin" />
        <FactsContainer
            age={21}
            numPets={1}
            cityName="Sydney"
            favTools={["Bootstrap CSS", "React", "Python"]}
        />
    </div>,
    document.querySelector('#root')
);