import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import { Home } from "./views/home.jsx";
import { Details } from "./views/details.jsx";
import injectContext from "./store/appContext";

import { cloudinaryURLs } from "../config/cloudinary.js"
import { Navbar } from "./component/navbar.jsx";



//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div style={{ cursor: `url(${cloudinaryURLs.cursor})16 16, auto` }}>
      <BrowserRouter basename={basename}>
      <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:type/:uid" element={<Details />}/>
            <Route path="*" element={<h1>Not found!</h1>} />
          </Routes>

      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
