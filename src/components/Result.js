import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from "./ResultHeader";
import thumb from "../asset/thumb-down.png";
import queryString from 'query-string';

async function getCard() { }

function Result() {
  const [card, setCard] = useState([]);
  const { search } = useParams();
  const [menuData, setMenuData] = useState("");
  const [recipes, SetRecipes] = useState("");
  const [drinks, SetDrinks] = useState("");

  let urlParams = new URLSearchParams(window.location.search);
  const displayDrink = urlParams.get('drink');
  const displayRecipe = urlParams.get('recipe');

  useEffect(() => {
    if (menuData === "") {
      getMenus();


      // console.log('asas', displayDrink);
    }
  }, [menuData]);

  const getMenus = async () => {
    //   console.log(params);
    const res = await Axios.get(
      `https://foodegrient-api.herokuapp.com/api/v1/menu?keywords=${search}`
    );

    const url = new URL(window.location.href)
    if (url.searchParams.get('drink') !== 'false') { SetDrinks(res.data.drinks); }
    if (url.searchParams.get('recipe') !== 'false') { SetRecipes(res.data.recipes); }
    setMenuData(res.data.recipes);
  };

  async function handleLikeBtn(id, index, type) {
    if (type === 'DRINK') {
      const res = await Axios.get(
        `https://foodegrient-api.herokuapp.com/api/v1/drinks/like?id=${id}`
      );
      let tempMenuData = drinks;
      tempMenuData[index].likes += 1;
      SetDrinks(tempMenuData);
      SetDrinks(prevList => {
        prevList[index].checked = !prevList[index].checked
        return [...prevList]
      })
    } else {
      const res = await Axios.get(
        `https://foodegrient-api.herokuapp.com/api/v1/recipes/like?id=${id}`
      );
      let tempMenuData = recipes;
      tempMenuData[index].likes += 1;
      SetRecipes(tempMenuData);
      SetRecipes(prevList => {
        prevList[index].checked = !prevList[index].checked
        return [...prevList]
      })
    }

  }

  async function handleUnlikeBtn(id, index, type) {
    if (type === 'DRINK') {
      const res = await Axios.get(
        `https://foodegrient-api.herokuapp.com/api/v1/drinks/unlike?id=${id}`
      );
      let tempMenuData = drinks;
      tempMenuData[index].unlikes += 1;
      SetDrinks(tempMenuData);
      SetDrinks(prevList => {
        prevList[index].checked = !prevList[index].checked
        return [...prevList]
      })
    } else {
      const res = await Axios.get(
        `https://foodegrient-api.herokuapp.com/api/v1/recipes/unlike?id=${id}`
      );
      let tempMenuData = recipes;
      tempMenuData[index].unlikes += 1;
      SetRecipes(tempMenuData);
      SetRecipes(prevList => {
        prevList[index].checked = !prevList[index].checked
        return [...prevList]
      })
    }
  }

  var card_array = [];

  //recipes
  for (let i = 0; i < recipes.length; i++) {
    card_array.push(
      <div
        className="col-md-6 col-sm-6 col-xs-12"
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#E4E9F2",
          marginBottom: "20px",
          marginInline: "10px",
          maxWidth: "300px",
        }}
      >
        <div
          className="row-md-11"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-11">
            <img
              className="card-img-top img-thumbnail"
              style={{ marginTop: "10px" }}
              src={recipes[i].image}
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{recipes[i].title}</h5>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"></div>
              Likes: {recipes[i].likes}{" "}
            </div>
            <div onClick={() => { handleLikeBtn(recipes[i].recipe_id, i, 'RECIPIES') }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>

            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"></div>
              Unlikes: {recipes[i].unlikes}{" "}
            </div>
            <div onClick={() => { handleUnlikeBtn(recipes[i].recipe_id, i, 'RECIPIES') }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hand-thumbs-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
              </svg>
            </div>
          </li>
        </div>
      </div>
    );
  }

  //drink
  for (let i = 0; i < drinks.length; i++) {
    card_array.push(
      <div
        className="col-md-6 col-sm-6 col-xs-12"
        style={{
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "#E4E9F2",
          marginBottom: "20px",
          marginInline: "10px",
          maxWidth: "300px",
        }}
      >
        <div
          className="row-md-11"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="col-md-11">
            <img
              className="card-img-top img-thumbnail"
              style={{ marginTop: "10px" }}
              src={drinks[i].image}
            />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{drinks[i].name}</h5>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"></div>
              Likes: {drinks[i].likes}{" "}
            </div>
            <div onClick={() => { handleLikeBtn(drinks[i].drink_id, i, 'DRINK') }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hand-thumbs-up-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z" />
              </svg>

            </div>
          </li>
          <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
              <div class="fw-bold"></div>
              Unlikes: {drinks[i].unlikes}{" "}
            </div>
            <div onClick={() => { handleUnlikeBtn(drinks[i].drink_id, i, 'DRINK') }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-hand-thumbs-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.378 1.378 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51.136.02.285.037.443.051.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.896 1.896 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2.094 2.094 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.162 3.162 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.823 4.823 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591z" />
              </svg>
            </div>
          </li>
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="Page1" style={{ marginTop: "20px" }}>
        <div className="container">
          <div className="row">{card_array !== [] ? card_array : []}</div>
        </div>
      </div>
    </>
  );
}

export default Result;
