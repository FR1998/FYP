import React, { Fragment } from 'react'
import Helmet1 from './Helmet1';
import "./Home.css";
import Product from './Product';


const product = {
    name:"Blue Shirt",
    price:"Rs 300",
    _id:"Afryd"
};

const Home = () => {
  return (
    <Fragment >
    <Helmet1  title="IBP" />
    <div className="banner">
            <p>Welcome to IBP</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            
            <a href="#container">
            <button type="button" className=" button1">Shop</button>
            </a>
          </div>
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            <Product product={product} />
            {/* {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))} */}
          </div>
    </Fragment>
  )
}

export default Home
