import React, { Component } from "react";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    console.log("Product");

    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-muted">
              # {this.state.product.id}
              <span
                className="pull-right"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times hand-icon"></i>
              </span>
            </div>
            <h5 className="pt-2 border-top">
              {this.state.product.productsName}
            </h5>

            <div>$ {this.state.product.price}</div>
          </div>
          {/* card body ends here */}

          <div className="card-footer">
            <div className="float-start">
              <span className="badge text-dark">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                    // 10 refers to the maximum number of products
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDrecement(this.state.product, 0);
                    // 0 refers to the minimum quantiy of products
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
