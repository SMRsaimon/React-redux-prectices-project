import React from "react";

const Product = ({ product }) => {
  const { product_name, quantity, supplier, id, unit_cost } = product;
  return (
    <div style={{ width: "300px", backgroundColor: "gray", marginBottom: "20px", padding: "20px", color: "white" }}>
      <p style={{ fontSize: "22px" }}> {product_name}</p>
      <p> {supplier}</p>
      <p>quantity : {quantity}</p>
      <p>Cost : {unit_cost}</p>
      <button className="btn">Add to Cart</button>
    </div>
  );
};

export default Product;
