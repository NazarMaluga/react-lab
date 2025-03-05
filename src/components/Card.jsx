import React from "react";
import "./Card.css";

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => alert(title)}>Дізнатися більше</button>
    </div>
  );
};

export default Card;
