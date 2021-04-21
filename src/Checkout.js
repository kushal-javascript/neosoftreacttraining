import { connect } from "react-redux";
import { Route, useRouteMatch, withRouter } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Address from "./Address";
import Ordersummary from "./Ordersummary";
import Payment from "./Payment";

function Checkout(props) {
  var qty = 0;
  var total = 0;
  var route = useRouteMatch();
  var url = route.url;
  var path = route.path;
  return (
    <div className="checkout" style={{ marginTop: "3%" }}>
      <div className="row">
        <div className="col-8">
          <div style={{ display: "table", width: "100%", textAlign: "center" }}>
            <NavLink to={url + "/address"} style={{ display: "table-cell" }} activeClassName="active">
              Address
            </NavLink>
            <NavLink to={url + "/payment"} style={{ display: "table-cell" }} activeClassName="active">
              Payment
            </NavLink>
            <NavLink to={url + "/ordersummary"} style={{ display: "table-cell" }}activeClassName="active">
              Order Summary
            </NavLink>
          </div>
          <div>
            <Route path={path + "/address"} component={Address} />
            <Route path={path + "/payment"} component={Payment} />
            <Route path={path + "/ordersummary"} component={Ordersummary} />
          </div>
        </div>
        <div className="col-4">
          {props && props.cart ? (
            <table
              className="table"
              id="dtBasicExample"
              cellSpacing="0"
              style={{ width: "100%" }}
            >
              <thead>
                <tr>
                  <th colSpan="3">Your Cart</th>
                </tr>
              </thead>
              <tbody>
                {props.cart?.length > 0 &&
                  props.cart.map((each, index) => {
                    qty = qty + each.quantity;
                    total = total + each.price;
                    return (
                      <tr>
                        <td>
                          <img
                            src={each.image}
                            alt={each.name}
                            style={{ width: "15%" }}
                          />
                          <br />
                          Name: {each.name}
                        </td>
                        <td>{each.quantity}</td>
                        <td>{each.price}</td>
                      </tr>
                    );
                  })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2">Qty = {qty}</th>
                  <td>{qty}</td>
                </tr>
                <tr>
                  <th colSpan="2">Grand Total</th>
                  <td>{total}</td>
                </tr>
              </tfoot>
            </table>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

Checkout = withRouter(Checkout);
export default connect(function (state, action) {
  return {
    cart: state?.cart,
  };
})(Checkout);
