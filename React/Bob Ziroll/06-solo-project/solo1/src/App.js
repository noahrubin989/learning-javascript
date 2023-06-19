import EntirePage from "./components/EntirePage.js";
import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey);


// import Navbar from "./components/Navbar.js";


export default function App() {
    return (
        <EntirePage></EntirePage>
    )
}