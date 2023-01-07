import React, { useState, useEffect } from "react";
import RecipeItem from "./ReciipeItems";
import Axios from "axios";
import jsonp from '../jsonp'; 

const Recipes = (props) => {
  const { recipes } = props;
  const [ topData, settopdata ] = useState(null);

  useEffect(() => {
    // Update the document title using the browser API
    if (topData === null) {
      getrecipes();
      
    }
  }, [topData]);

  const getrecipes = async () => {
    jsonp(
      'https://foodegrient-api.herokuapp.com/api/v1/top',
      response => {(settopdata(response.data));
      console.log("data",topData)
      }
    );
    // const res = await Axios.get(
    //   `https://foodegrient-api.herokuapp.com/api/v1/top`
    // );
    // settopdata(res);
    // console.log("topData", res);
  };

  return (
    <div
      className="m-auto"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div class="card" style={{ width: "18rem" }}>
        {topData !== null ? (
          <img src={topData.image} className="card-img-top" alt="..." />
        ) : (
          ""
        )}
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small class="text-muted">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit longer{" "}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
