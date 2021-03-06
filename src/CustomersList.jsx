import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: null,
        address: { city: "New Delhi" },
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Allen",
        phone: "895-456",
        address: { city: "jersey" },
        photo: "https://picsum.photos/id/1020/60",
      },
      {
        id: 3,
        name: "Jones",
        phone: null,
        address: { city: "Ohio" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 4,
        name: "James",
        phone: "432-456",
        address: { city: "New York" },
        photo: "https://picsum.photos/id/1040/60",
      },
      {
        id: 5,
        name: "Johnattan",
        phone: "782-456",
        address: { city: "California" },
        photo: "https://picsum.photos/id/1050/60",
      },
    ],
  };

  customerNameStyle = (custName) => {
    if (custName.startsWith("S")) return "green-highlight border-left";
    else if (custName.startsWith("J")) return "red-highlight border-right";
    else return "";
  };

  render() {
    return (
      <div>
        <h4 className="m-1 p-1">
          {this.state.pageTitle}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone </th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }

  //Excutes when the user clicks on refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 8,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone </div>;
    }
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>

          <td>
            <img src={cust.photo} alt="Customer" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Photo
              </button>
            </div>
          </td>

          <td className={this.customerNameStyle(cust.name)}>{cust.name}</td>

          <td>{this.getPhoneToRender(cust.phone)}</td>

          <td>{cust.address.city}</td>
        </tr>
      );
    });
  };

  // Executes when the user clicks on "Change Picture" button in the grid
  // Receives the customer" object and index of thecurently clicked customer
  onChangePictureClick = (cust, index) => {
    // console.log(cust);
    // console.log(index);

    //get existing customers
    var custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/104/60";

    //update "customers" array in state
    this.setState({ customers: custArr });
  };
}
