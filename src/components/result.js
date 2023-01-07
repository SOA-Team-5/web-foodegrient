import React, { useState, useEffect } from "react";
import Axios from "axios";
import {  Link } from "react-router-dom";
import { useParams } from "react-router-dom";




async function getCard(){

}

function Result() {
    const [card, setCard]       = useState([]);
    const params = useParams();
    console.log(params)
    

    // useEffect(() => {
    //     getCard(
    //     ).then((result) => {
    //         setCard(result);
    //     });
    // }, []);
  return(
    <div className="Page1">
    <div className="container">
        <div className="row">
            {card ? (
                card.map((data) => (
                    <div className="col-md-6 col-sm-2 col-xs-12">
                        <div className="row-md-11">
                        <div className="col-md-11">
                            <img className="card-img-top img-thumbnail" src={{}} />
                        </div>
                        </div>
                        <div className="card-body">
                        <h5 className="card-title">"nihao"</h5>
                        </div>
                    </div>
                ))
            ) : (
                <div class="container mt-3">
                <td class="align-text-bottom align-middle">text-bottom</td>
                <p class="text-center h1">woops</p>
                </div>
            )}
        </div>
    </div>
</div>
  )
}

export default Result;