import React, { useState, useEffect } from "react";
import {Link } from "react-router-dom";
import './../App.css'

const Header = (props) => {

  const [search, setSerach] = useState("egg");
  const handleSearch = (e) => {
    console.log(e.target, 'changeVal')
    setSerach(e.target.value)
   


}
  function hanlebutton(){
    
  }
  return (
    <div className="hiding">
      <h1 className="display-1">
        <img className="food-icon img-fluid" src="./fast-food-svgrepo-com.svg" alt="" />FoodeGrient</h1>

      <div className="input-group w-50 m-auto">
        <input type="text" className="form-control"  aria-label="Recipient's username" aria-describedby="basic-addon2" value={search}  onChange={handleSearch}  />
        <Link to={{pathname:`/result/${search}`}} className='btn  btn-dark'>Search Menu</Link>
      </div>

    </div>
  )
}

export default Header;