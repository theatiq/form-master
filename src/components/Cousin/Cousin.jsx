import React from "react";
import Special from "../Special/Special";
import Friend from "../Friend/Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      {asset && <Special asset={asset}></Special>}
      {name === "Sumon" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
