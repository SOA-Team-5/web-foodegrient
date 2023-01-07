import React, { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";
const Recipes = () => {
  const [ topData, settopdata ] = useState(null);
  useEffect(() => {
    // Update the document title using the browser API
    if (topData === null) {
      getrecipes();
      console.log("data",topData)
    }
  }, [topData]);

  const getrecipes = async () => {
    const res = await Axios.get(
      `https://foodegrient-api.herokuapp.com/api/v1/top`
    );
    settopdata(res.data);
    console.log("topData", res);
  }
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
          <img src={topData?.image} className="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
           {topData?.title}
          </p>
          <p class="card-text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-heart" viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
            <small class="text-muted">
            {topData?.likes}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
