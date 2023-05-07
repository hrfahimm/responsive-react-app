import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = (props) => {
  const { _id, name, img, price, description } = props.service;
  return (
    <div className="card m-5 bg-secondary" style={{ width: "25rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">Name : {name} </h2>
        <h3>Price : {price}</h3>
        <p>{description.slice(0, 50)}</p>
        <Link to={`/booking/${_id}`}>
          <button className="btn btn-danger bottom-50">Book This Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
