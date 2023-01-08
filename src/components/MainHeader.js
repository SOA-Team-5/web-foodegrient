import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./../App.css";

const Header = (props) => {
  const [search, setSerach] = useState(null);
  const handleSearch = (e) => {
    console.log(e.target, "changeVal");
    setSerach(e.target.value);
  };
  return (
    <div className="hiding" >
      <h1 className="" style={{marginBottom: '20px'}}>
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
        <Link to={{ pathname: `/result/${search}` }} className="btn  btn-dark">
          Search Menu
        </Link>
      </div>
    </div>
  );
};

export default Header;
