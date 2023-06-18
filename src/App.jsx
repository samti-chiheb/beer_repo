import React from "react";
// import BeerList from "./Container/BeerList";
import BeerList from "./Container/BeerList";
import BeerDetails from "./Container/BeerDetails";
import {Routes, Route} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NotFound from "./Container/NotFound";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<BeerList />} />
        <Route path="/beer/:id" element={<BeerDetails />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};


export default App;