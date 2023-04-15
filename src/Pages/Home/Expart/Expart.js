import React from "react";

const Expart = ({ expart }) => {
  const { name, img, expertize } = expart;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      {" "}
      <img className="w-100" src={img} alt="" />
      <h2>Name:{name}</h2>
      <h3 className="text-danger">Expart in {expertize}</h3>
    </div>
  );
};

export default Expart;
