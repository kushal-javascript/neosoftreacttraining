import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mart from "./reduxstore/store";
import axios from "axios";
import { connect } from "react-redux";

function Cart(props) {
  var qty = 0;
  var total = 0;
  useEffect(() => {
    if (localStorage.token) {
      var token = localStorage.token;
      axios({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/cakecart",
        headers: {
          authtoken: token,
        },
        data: {},
      }).then(
        (response) => {
          if (response.data.data) {
            console.log("CART");
            props.dispatch({
              type: "CART",
              payload: response.data.data,
            });
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);

  let removeProduct = (event) => {
    event.preventDefault();
    var cakeID = event.currentTarget.getAttribute("data-cakeid");
    var cakeEmail = event.currentTarget.getAttribute("data-email");
    if (cakeID && cakeEmail) {
      var token = localStorage.token;
      axios({
        method: "post",
        url: "https://apifromashu.herokuapp.com/api/removecakefromcart",
        headers: {
          authtoken: token,
        },
        data: { email: cakeEmail, cakeid: cakeID },
      }).then(
        (response) => {
          console.log("REMOVE_PRODUCT")
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    }
  };
  return (
    <div className="cart-detail">
      {props && props.cart ? (
        <div className="row" style={{ marginTop: "3%" }}>
          <div className="col-12 col-lg-9">
            <table
              className="table table-striped table-bordered cart-product-detail"
              id="dtBasicExample"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Product Detail</th>
                  <th scope="col">Qty</th>
                  <th scope="col">Weight</th>
                  <th scope="col">Price</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {props.cart?.length > 0 &&
                  props.cart.map((each, index) => {
                    qty = qty + each.quantity;
                    total = total + each.price;
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            src={each.image}
                            alt={each.name}
                            style={{ width: "25%" }}
                          />
                          <br />
                          Name: {each.name}
                          <br />
                          Cake ID: {each.cakeid}
                          <br />
                          Created At: {each.createdat}
                        </td>
                        <td>{each.quantity}</td>
                        <td>{each.weight}</td>
                        <td>{each.price}</td>
                        <td>
                          <button
                            className="btn btn-danger pull-right"
                            onClick={removeProduct}
                            data-cakeid={each.cakeid}
                            data-email={each.email}
                          >
                            X
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-lg-3">
            <table className="table table-hover cart-summary">
              <thead>
                <tr>
                  <th scope="col" colSpan="2">
                    Cart Summary
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan="2">Qty = {qty}</td>
                </tr>
                <tr>
                  <td>Grand Total = {total}</td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <Link to="/checkout/address">
                      <button className="btn btn-primary">Checkout</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <h4>Shopping Cart Is Empty.</h4>
      )}
    </div>
  );
}
Cart = withRouter(Cart);
export default connect(function (state, action) {
  return {
    cart: state?.cart,
  };
})(Cart);
