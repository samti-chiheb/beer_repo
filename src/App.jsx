import React from "react";
import {Routes, Route} from "react-router-dom";
import {Navbar} from './components'
import BeerDetails from "./Container/BeerDetails";
import BeerList from "./Container/BeerList";
import NotFound from "./Container/NotFound";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Render the BeerList component when the path is "/" */}
        <Route path="/" element={<BeerList />} />
        {/* Render the BeerDetails component when the path is "/beer/:id" */}
        <Route path="/beer/:id" element={<BeerDetails />} />
        {/* Render the NotFound component for any other paths */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
};


export default App;