import React from "react";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
    
      <div className="card" style={{width:"18rem"}} >
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
      
  );
};

export default RecipeItem;