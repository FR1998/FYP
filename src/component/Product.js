import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const options = {
    edit:false
};


const Product = ({ product }) => {
    // const options = {
    //   value: product.ratings,
    //   readOnly: true,
    //   precision: 0.5,
    // };
    return (
      <Link className="productCard" to={product._id}>
        {/* <img src={product.images[0].url} alt={product.name} /> */}
        <img
        src="https://i.pinimg.com/originals/06/14/28/0614281c43fda3ad87fa9a82371032c4.png"
        alt="Shirt"
      />
        <p>{product.name}</p>
        <div>
          <ReactStars {...options} />{" "}
          <span className="productCardSpan">
            {" "}
            (256 Reviews)
          </span>
        </div>
        <span>{product.price}</span>
      </Link>
    );
  };

export default Product
