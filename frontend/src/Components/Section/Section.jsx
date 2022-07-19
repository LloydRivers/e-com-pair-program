import React from "react";
import ProductCard from "../Cards/ProductCard";

function Section({ data, title }) {
  return (
    <div className="container">
      <h2 style={{ padding: "1rem" }}>{title}</h2>
      <div className="row">
        {data.map((product) => (
          <div className="col-12 col-md-6 col-lg-3" key={product.id}>
            <ProductCard className="line-clamp" product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section;
