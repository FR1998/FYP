import React from 'react'
import "./Home.css";
import Product from './Product';

const product = {
    name:"Blue Shirt",
    price:"Rs 300",
    _id:"Afryd"
};

const Products = () => {
    return (
      <div>
         <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
        </div>
        </div>
        );
        }

export default Products