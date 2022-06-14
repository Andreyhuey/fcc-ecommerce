import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productsName: "iPhone", price: 8900, quantity: 1 },
      { id: 2, productsName: "Sony Camera", price: 4500, quantity: 0 },
      { id: 3, productsName: "Samsung QLED TV", price: 7745, quantity: 0 },
      { id: 4, productsName: "iPad Pro", price: 12400, quantity: 1 },
      { id: 5, productsName: "Xbox", price: 7780, quantity: 1 },
      { id: 6, productsName: "Dell Monitor", price: 8900, quantity: 1 },
    ],
  };

  render() {
    return (
      <>
        <div className="container-fluid">
          <h4>Shopping cart</h4>

          <div className="row">
            {this.state.products.map((prod) => {
              return <Product key={prod.id} product={prod} />;
            })}
          </div>
        </div>
      </>
    );
  }
}
