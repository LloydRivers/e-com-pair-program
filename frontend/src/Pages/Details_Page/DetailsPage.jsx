import React from "react";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/CartSlices/cartSlice";

import { selectProduct } from "../../Redux/slices/ProductSlices/productSlice";

const DetailsPage = () => {
  const product = useSelector(selectProduct);
  const dispatch = useDispatch();

  const sweetAlert = () => {
    dispatch(addToCart(product));

    Swal.fire({
      title: "Added to cart",
      text: "Product has been added to cart",
      icon: "success",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  return (
    <div style={{ width: `450px`, margin: "auto" }} className="product-card">
      <div className="badge">Hot</div>
      <div className="imageContainer">
        <img className="img" src={product.image} alt="" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{product.category}</span>
        <h4 className="product-title">{product.title}</h4>
        <p className="product-description">{product.description}</p>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>${product.price}</small>
          </div>
          <div className="product-links">
            {/* <Link to={`/details/${product.id}`}>
              <i className="fa fa-heart"></i>
            </Link> */}
            <a onClick={sweetAlert}>
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
