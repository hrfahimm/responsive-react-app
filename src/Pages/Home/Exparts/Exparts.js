import React from "react";
import mechanic1 from "../../../images/team/1.jpg";
import mechanic2 from "../../../images/team/2.jpg";
import mechanic3 from "../../../images/team/3.jpg";
import mechanic4 from "../../../images/team/1.jpg";
import Expart from "../Expart/Expart";

const exparts = [
  { id: 1, img: mechanic1, name: "fahim", expertize: "Engine Expart" },
  { id: 2, img: mechanic2, name: "Akbor", expertize: "mirroe Expart" },
  { id: 3, img: mechanic3, name: "sahadt", expertize: "door Expart" },
  {
    id: 4,
    img: mechanic4,
    name: "fahad",
    expertize: "tire Expart",
  },
];
const Exparts = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">Our Exparts</h1>
      <div className="row">
        {exparts.map((expart) => (
          <Expart key={expart.id} expart={expart}></Expart>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
