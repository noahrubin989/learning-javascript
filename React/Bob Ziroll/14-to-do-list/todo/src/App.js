import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import FeaturesPage from "./components/FeaturesPage";
import PricingPage from "./components/PricingPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import { Box } from "@mui/material";

// import the data
import stats from "./assets/data/stats";
import reviews from "./assets/data/reviews";
import imageObjectsArray from "./assets/data/image-objects";

export default function App() {
  return (
    // Ensures that footer stays at the bottom and expands to fill the available space
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Router>
        {/* NavBar to be displayed on every page */}
        <NavBar />
        {/* This is part 2 of ensuring that the footer stays exactly where I want it */}
        <Box sx={{ flex: 1 }}>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  reviews={reviews}
                  imageObjectsArray={imageObjectsArray}
                />
              }
            />
            <Route path="/about" element={<AboutPage stats={stats} />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
        {/* Footer to be displayed at the bottom */}
        <Footer />
      </Router>
    </Box>
  );
}
