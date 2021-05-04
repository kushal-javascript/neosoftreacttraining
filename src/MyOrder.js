import { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function MyOrder(props) {
  useEffect(() => {
    if (localStorage.token && props) {
      if (!props.getOrderDetail) {
        props.dispatch({
          type: "GET_ORDER_DETAIL"
        });
      }
    }
  }, []);
  return (
    <div className="my-account-order">
      <h3>My Order Detail</h3>
      {props && props.getOrderDetail ? (
        <table
          className="table table-striped table-bordered cart-product-detail"
          id="dtBasicExample"
          cellSpacing="0"
        >
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Order Date</th>
              <th>Address</th>
              <th>Payment Method</th>
              <th>Qty</th>
              <th>Grand Total</th>
            </tr>
          </thead>
          <tbody>
            {props.getOrderDetail?.length > 0 &&
              props.getOrderDetail.map((each, index) => {
                return (
                  <tr>
                    <td>{each.orderid}</td>
                    <td>{each.orderdate}</td>
                    <td>
                      {each.name},<br />
                      {each.address},<br />
                      {each.city},{each.pincode}.<br />
                      phone = {each.phone}.<br />
                      Email = {each.email}.<br />
                    </td>
                    <td>{each.mode}</td>
                    <td>{each.cakes.length}</td>
                    <td>{each.price}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      ) : (
        <div className="empty">No Order Found.</div>
      )}
    </div>
  );
}
MyOrder = withRouter(MyOrder);
export default connect(function (state, action) {
  console.log("connect GET_ORDER_DETAIL");
  return {
    user: state?.user,
    getOrderDetail: state?.get_order_detail,
  };
})(MyOrder);
