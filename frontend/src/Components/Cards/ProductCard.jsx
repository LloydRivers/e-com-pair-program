import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../Redux/slices/ProductSlices/productSlice";
import "../../Styles/productCard.css";
const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();

  const addProductToDetailsPage = () => {
    console.log("addProductToDetailsPage");
    dispatch(addProduct(product));
  };
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div className="product-card">
      <div className="badge">Hot</div>
      <div className="imageContainer">
        <Link onClick={addProductToDetailsPage} to={`/details/${product.id}`}>
          <img className="img" src={product.image} alt="" />
        </Link>
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
            <a>
              <i
                onClick={handleLike}
                style={{ color: liked ? "red" : "black" }}
                className="fa fa-heart"
              ></i>
            </a>
            <a>
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
