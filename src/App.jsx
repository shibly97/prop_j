import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
// import Navbar from "./Navbar";
// import Home from "./Home";
// import About from "./About";
// import Contact from "./Contact";

import { FavouritPage } from './pages/FavouritPage';
import { LandingPage } from './pages/LandingPage';
import { PropertyPage } from './pages/PropertyPage';
import { SearchPage } from './pages/SearchPage';
import { Nav } from './components/Nav';
import {properties as propertiesData} from './data/properties.json'

function App() {

  const [properties, setProperties] = useState(propertiesData);
  const [favourits, setFavourits] = useState([]);


  return (
    <>
        <Router>
          <div>
            <Nav/>
            <Routes>
              {/* <Route path="/*" element={ <Nav/>}> */}
              <Route path="/" element={<LandingPage setProperties={setProperties}/>} />
              <Route path="/search/" element={<SearchPage properties={properties}/>} />
              <Route path="/property/:id" element={<PropertyPage favourits={favourits} setFavourits={setFavourits}/>} />
              <Route path="/favourit" element={<FavouritPage favourits={favourits} setFavourits={setFavourits}/>} />
              {/* </Route> */}
            </Routes>
          </div>
        </Router>
    </>
  )
}

export default App
