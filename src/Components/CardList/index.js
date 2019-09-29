import React from "react";

import "./card-list.m.css";
import Card from "../Card";

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map((monster, index) => (
      <Card monster={monster} key={index} />
    ))}
  </div>
);

export default CardList;
