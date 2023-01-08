import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./../App.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [search, setSerach] = useState(null);
  const [MenuChecked, setmenuChecked] = useState(false);
  const [DrinkChecked, setdrinkChecked] = useState(false);

  const handleSearch = (e) => {
    console.log(e.target, "changeVal");
    setSerach(e.target.value);
  };
  const menuOnChange = () => {
    setmenuChecked(!MenuChecked);
  };
  const drinkOnChange = () => {
    setdrinkChecked(!DrinkChecked);
  };

  const navigate = useNavigate();

  function handleBtn(){
    // history.pushState()
    navigate(`/result/${search}`);
  }
  return (
    <div className="hiding">
      <h1 className="" style={{ marginBottom: "20px" }}>
        <img
          className="food-icon img-fluid"
          src="./fast-food-svgrepo-com.svg"
          alt=""
        />
        Foodegrient
      </h1>

      <div className="input-group w-50 m-auto">
        <input
          type="text"
          style={{ width: "50%" }}
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={handleSearch}
        />

        <button  className="btn  btn-dark" 
        onClick={handleBtn.bind(this)}
        >
          Search Menu
        </button>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
          checked={MenuChecked}
          // onChange={menuOnChange}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Drink
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
          checked={DrinkChecked}
          // onChange={drinkOnChange}
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Menu
        </label>
      </div>
    </div>
  );
};

export default Header;
