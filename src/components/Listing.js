import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";

function Listing(props) {
  return (
    <div className="Listing-boxes">
      <img width="300px" src={props.image}></img>
      <h2> Name:{props.Name}</h2>
      <h2> Price:{props.Price} €</h2>
      <Link to="/contact"> You will be redirected to the contact page </Link>
    </div>
  );
}

export default Listing;
