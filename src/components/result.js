import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./ResultHeader";

async function getCard() {}

function Result() {
  const [card, setCard] = useState([]);
  const { search } = useParams();
  const [menuData, setMenuData] = useState("");

  useEffect(() => {
    if (menuData === "") {
      getrecipes();
    }
  }, [menuData]);

  const getrecipes = async () => {
    //   console.log(params);
    const res = await Axios.get(
      `https://foodegrient-api.herokuapp.com/api/v1/menu?keywords=${search}`
    );
    setMenuData(res.data.recipes);
  };

  var card_array = [];

  for (let i = 0; i < menuData.length; i++) {
    card_array.push(
      <div className="col-md-6 col-sm-6 col-xs-12" 
       style={{borderStyle: 'solid', borderWidth:'1px', borderColor: '#E4E9F2', marginBottom:'20px',
      marginInline: '10px', maxWidth: '300px'
      }}
      >
        <div className="row-md-11" style={{ display: "flex", justifyContent: "center",}}>
          <div className="col-md-11">
            <img
              className="card-img-top img-thumbnail" style={{marginTop:'10px'}}
              src={menuData[i].image}
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{menuData[i].title}</h5>
          <li class="list-group-item">Likes: {menuData[i].likes}</li>
          <li class="list-group-item">Unlikes: {menuData[i].unlikes}</li>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <div className="Page1" style={{marginTop: '20px'}}>
        <div className="container">
          <div className="row">{card_array !== [] ? card_array : []}</div>
        </div>
      </div>
    </>
  );
}

export default Result;
