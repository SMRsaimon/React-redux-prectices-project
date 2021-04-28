import React from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const product = [
    {
      id: "5968dd23fc13ae04d9000001",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000002",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000003",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000004",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000005",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000006",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000007",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000008",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000009",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000010",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000011",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000012",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000013",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
    {
      id: "5968dd23fc13ae04d9000014",
      product_name: "Mountain Juniperus ashei",
      supplier: "Keebler-Hilpert",
      quantity: 292,
      unit_cost: "$8.74",
    },
  ];
  return (
    <div>
      <h1>Redux simple Prectices Add to Cart Product </h1>
      <div style={{ display: "flex" }}>
        <div className="products-container-shop">
          {product.map((pd) => (
            <Product key={pd.id} product={pd}></Product>
          ))}
        </div>
        <div className="cartContainer">
          <h1> Cart Product </h1>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Shop;
