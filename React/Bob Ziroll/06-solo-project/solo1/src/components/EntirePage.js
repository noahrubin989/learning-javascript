import About from "./About.js";
import CardIntro from "./CardIntro.js";
import ContactInfo from "./ContactInfo.js";
import Footer from "./Footer.js";
import Interests from "./Interests.js";

export default function EntirePage() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <div className="card">
                <img className="card-img-top" src={require('../img/jane.jpg')} alt="jane-doe"/>
                <div className="card-body">
                    <CardIntro></CardIntro>
                    <ContactInfo></ContactInfo>
                    <About></About>
                    <Interests></Interests>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
}