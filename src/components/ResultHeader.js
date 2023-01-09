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
    <div className="resultHeader">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="" style={{ marginBottom: "20px", color: 'white' }}>
          <img
            className="result-header-food-icon img-fluid"
            src="../fast-food-svgrepo-com.svg"
            alt=""
          />
          Foodegrient
        </h1>
      </Link>

      <div className="input-group w-50 m-auto">
        <input
          type="text"
          style={{ width: "30%" }}
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={search}
          onChange={handleSearch}
        />
        <button className="btn btn-dark"
          onClick={() => {
            window.location.replace(`/result/${search}`);
          }}>
          Search
        </button>
      </div>
    </div>
  );
};

export default Header;
