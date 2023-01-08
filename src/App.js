import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/MainHeader";
import Recipes from "./components/Home";
import Result from "./components/Result";
import NotFound from "./components/NotFound";
import Axios from "axios";

function App() {


  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route exact path="/" element={<Recipes />} />
        <Route path="/result/:search" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
