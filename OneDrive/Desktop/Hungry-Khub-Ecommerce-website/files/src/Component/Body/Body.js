import React from "react";
import Menu from "./Menu";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Slidder from "./Slidder";
import Services from "./Services";
import { Routes, Route } from "react-router-dom";

const Body = () => {
    return (
        <div>
            <Routes>
                < Route path='/' exact element={<Home />} />
                < Route path='/food-item' exact element={<Menu />} />
                < Route path='/about' exact element={<About />} />
                < Route path='/services' exact element={<Services />} />
                < Route path='/contact' exact element={<Contact />} />
            </Routes>
            <Slidder />

        </div>
    );
}

export default Body;