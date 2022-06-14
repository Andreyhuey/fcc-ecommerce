import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  // Executes when the component is mounted
  constructor() {
    console.log("constructor - ShoppingCart");
    super(); //calling the super class's constructor
    // intialization of the state
    this.state = {
      products: [
        { id: 1, productsName: "iPhone 13", price: 8900, quantity: 0 },
        { id: 2, productsName: "Sony Camera", price: 4500, quantity: 0 },
        { id: 3, productsName: "Samsung QLED TV", price: 7745, quantity: 0 },
        { id: 4, productsName: "iPad Pro", price: 12400, quantity: 0 },
        { id: 5, productsName: "Xbox", price: 7780, quantity: 0 },
        { id: 6, productsName: "Dell Monitor", price: 8900, quantity: 0 },
      ],
    };
  }
  // Constructor Ends Here

  render() {
    console.log("render - ShoppingCart");
    return (
      <>
        <div className="container-fluid">
          <h4>Shopping cart</h4>

          <div className="row">
            {this.state.products.map((prod) => {
              return (
                <Product
                  key={prod.id}
                  product={prod}
                  onIncrement={this.handleIncrement}
                  onDrecement={this.handleDecrement}
                  onDelete={this.handleDelete}
                >
                  <button className="btn btn-primary text-right">
                    Buy Now
                  </button>
                </Product>
              );
            })}
          </div>
        </div>
      </>
    );
  }
  // Render Ends Here

  // Executes after constructor and render method(includes life cycle of child components, if any) of current component.
  // Perfect time to Update or Use http requests and fetch data from database or any other source
  componentDidMount() {
    // fetch data from data source
    console.log("componentDidMount - ShoppingCart");
  }

  // Executes when the user clicks on + button
  handleIncrement = (product, maxValue) => {
    // get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      // update the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };

  // Executes when the user clicks on - button
  handleDecrement = (product, minValue) => {
    console.log("handle Decrement", product);
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      // update the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };

  // executes when the user clicks on Delete(X button) in the product component.
  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    // confirmation for delete
    if (window.confirm("Are you sure to delete?")) {
      // delete product based on index
      allProducts.splice(index, 1);

      // update the state of current component(parent component)
      this.setState({ products: allProducts });
    }
  };
}
