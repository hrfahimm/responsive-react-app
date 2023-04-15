import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";
const Service = (props) => {
  const { id, name, img, price, description } = props.service;
  return (
    <div className="card m-5 bg-secondary" style={{ width: "25rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h2 className="card-title">Name : {name} </h2>
        <h3>Price : {price}</h3>
        <p>{description}</p>
        <Link to={`/booking/${id}`}>
          <button className="btn btn-danger">Book This Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
