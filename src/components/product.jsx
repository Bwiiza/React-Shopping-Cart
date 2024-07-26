import React from "react";

export const Product = (props) => {
  const { id, name, price } = props.data;

  return (
    <div className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
