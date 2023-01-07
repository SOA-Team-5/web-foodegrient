import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipe";
import Result from "./components/result"
import NotFound from "./components/NotFound";
import Axios from "axios";

function App() {
  const [search, setSerach] = useState("egg");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
  getrecipes();
  });
  
     const onInputChange = e => {
      setSerach(e.target.value);
    };
    console.log(search);
  const getrecipes = async () => {
    const res = await Axios.get(
      ``
    );
    setRecipes(res.data.hits);
  };

  const onSearchClick = () => {
    getrecipes();
  };
  return (
    <Router>
       <Header/>
    <Routes>
    <Route exact path="/home"  element={<Recipes/>}/>
    <Route path="/result*" element={<Result/>}/>
    <Route path="*" element={<NotFound/>}/>
    </Routes>
    </Router>
    
     
  );
}

export default App;
