import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import "./../App.css";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [search, setSerach] = useState(null);
  const [MenuChecked, setmenuChecked] = useState(true);
  const [DrinkChecked, setdrinkChecked] = useState(true);

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

  function handleBtn() {
    // history.pushState()
    if ((MenuChecked || DrinkChecked) === false) {
      alert("Please select one or more menu type ")
    } else if (search === '' || search === null) {
      alert("Please input the keywords")
    }
    else {
      navigate(`/result/${search}?drink=${DrinkChecked}&recipe=${MenuChecked}`);
    }
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

      <div className="w-50 m-auto" style={{ justifyContent: 'center', alignItems: 'center' }}>
        <input
          type="text"
          style={{ width: "90%", marginInline: '5%' }}
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={handleSearch}
        />
        <p></p>
        <button className="btn  btn-dark"
          onClick={handleBtn.bind(this)}
        >
          Search Menu
        </button>
      </div>
      <p></p>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="option1"
          checked={MenuChecked}
          onClick={menuOnChange}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Recipe
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="option2"
          checked={DrinkChecked}
          onClick={drinkOnChange}
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Drink
        </label>
      </div>
    </div>
  );
};

export default Header;
