import { connect } from "react-redux";
import { withRouter } from "react-router";

function Ordersummary(props) {
  return (
    <div
      className="order-summary"
      style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}
    >
      {!props && props.history.push("/")}
      {!props?.cart && props.history.push("/cart")}
      {!props?.address_data && props.history.push("/cart")}
      <h3 style={{ textAlign: "center" }}>Order Summary</h3>
      {props?.address_data &&
      <table className="table table-bordered">
        <tr>
          <th>Shipping Address</th>
          <th>Billing Address</th>
        </tr>
        <tr>
          <td>
            {props.address_data.name}
            <br />
            {props.address_data.address},<br />
            {props.address_data.city},<br />
            {props.address_data.state},{props.address_data.zip}
            <br />
          </td>
          <td>
            {props.address_data.name}
            <br />
            {props.address_data.address},<br />
            {props.address_data.city},<br />
            {props.address_data.state},{props.address_data.zip}
            <br />
          </td>
        </tr>
        <tr>
          <td colSpan="2">Payment = {props.payment_data}</td>
        </tr>
        <tr>
          <td colSpan="2">
            <div className="col-auto text-center">
              <button className="btn btn-primary" style={{ marginTop: "2%" }}>Place Order</button>
            </div>
          </td>
        </tr>
      </table>
      }
    </div>
  );
}
Ordersummary = withRouter(Ordersummary);
export default connect(function (state, action) {
  return {
    cart: state?.cart,
    address_data: state?.address_data,
    payment_data: state?.payment_data,
  };
})(Ordersummary);
