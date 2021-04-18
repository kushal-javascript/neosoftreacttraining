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

function Cart(props) {
  let [cartProductDetail, setCartProductDetail] = useState([]);
  var qty = 0;
  var total = 0;
  useEffect(() => {
    if (localStorage.token) {
      var token = localStorage.token;
      axios({
        method: "post",
        url: "https://apibyashu.herokuapp.com/api/cakecart",
        headers: {
          authtoken: token,
        },
        data: {},
      }).then(
        (response) => {
          if (response.data.data) {
            setCartProductDetail(response.data.data);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }, []);
  var count = 1;
  return (
    <div className="cart-detail">
      {cartProductDetail ? (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Detail</th>
              <th scope="col">Qty</th>
              <th scope="col">Weight</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {cartProductDetail?.length > 0 &&
              cartProductDetail.map((each, index) => {
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
                      SKU: {each.cakeid}
                    </td>
                    <td>{each.quantity}</td>
                    <td>{each.weight}</td>
                    <td>{each.price}</td>
                  </tr>
                );
              })}
            <tr>
              <th colSpan="4">Qty = {qty}</th>
              <td colSpan="2">Grand Total = {total}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan="6">
                <button className="btn btn-primary">Checkout</button>
              </th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <h4>Shopping Empty.</h4>
      )}
    </div>
  );
}
export default withRouter(Cart);
