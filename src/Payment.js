import { connect } from "react-redux";
import { withRouter } from "react-router";

function Payment(props) {
  var payment_data = null;

  let setPayment = (event) => {
    payment_data = event.target.value;
  };

  let nextSummary = (event) => {
    event.preventDefault();
    console.log(payment_data);
    if(payment_data){
      props.dispatch({
        type: "PAYMENT_DATA",
        payload: payment_data,
      });
      props.history.push("/checkout/ordersummary");
    }
    
  };

  return (
    <div
      className="payment"
      style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}
    >
      {!props && props.history.push("/")}
      {!props.cart && props.history.push("/cart")}
      {!props.address_data && props.history.push("/cart")}
      <h3 style={{ textAlign: "center" }}>Select Payment</h3>
      <form onSubmit={nextSummary}>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="cod"
            value="Cash on Delivery"
            onClick={setPayment}
          />
          <label className="form-check-label" for="cod">
            Cash on Delivery
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="payment"
            id="bank_transfer"
            value="Bank Transfer"
            onClick={setPayment}
          />
          <label className="form-check-label" for="bank_transfer">
            Bank Transfer
          </label>
        </div>
        <div className="col-auto text-center">
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "2%" }}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
Payment = withRouter(Payment);
export default connect(function (state, action) {
  return {
    cart: state?.cart,
    address_data: state?.address_data,
  };
})(Payment);
