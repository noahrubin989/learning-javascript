import React from "react";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faHeart } from "@fortawesome/free-solid-svg-icons";
library.add(faLocationDot, fab, faHeart);

export default function Experience(props) {
  let start = moment(props.startDate).format("MMM DD, YYYY");
  let end = moment(props.endDate).format("MMM DD, YYYY");

  return (
    <div className="container-fluid">
      <div className="image-container position-relative">
        {/* had to place imagesd in public directory (relatie import starting at public directory) */}
        <img src={`./img/${props.image}`} alt="destination" />
        <i class="fa-solid fa-heart position-absolute top-50 start-50 fa-2xl"></i>
      </div>
      <div className="text-container">
        <div className="location-info d-flex align-items-center">
          <FontAwesomeIcon
            className="location-icon"
            icon="fa-solid fa-location-dot"
          />
          <p className="location-country">{props.country}</p>
          <p>
            <a
              href="https://www.google.com/maps"
              class="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
            >
              View on google maps
            </a>
          </p>
        </div>
        <h1 className="location-city">{props.destinationName}</h1>
        <div>
          <p className="mb-0">
            <strong>{`${start} - ${end}`}</strong>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}
