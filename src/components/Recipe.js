import React from "react";
import RecipeItem from "./ReciipeItems";

const Recipes = props => {
  const { recipes } = props;
  return (
    
<div className="m-auto" style={{
  display: 'flex',
  alignItems: 'center',
  justifyContent:'center',
  height:'100vh',
}}>
  <div class="card" style={{width:"18rem"}}>
  <img src="https://pub-549992979d37433da73eb7c04f3d376b.r2.dev/img/2022/12/548de937-8f42-43da-aa19-e134f2568ceb.jpg" className="card-img-top"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer </small></p>
  </div>
</div>
</div>


  );
};

export default Recipes;