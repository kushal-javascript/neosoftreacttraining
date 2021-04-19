import { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

function Address(props) {
  var [addressData, setAddressData] = useState({});

  let setFormUsername = (event) => {
    setAddressData({
      ...addressData,
      name: event.target.value,
    });
  };

  let setFormAddress = (event) => {
    setAddressData({
      ...addressData,
      address: event.target.value,
    });
  };

  let setFormCity = (event) => {
    setAddressData({
      ...addressData,
      city: event.target.value,
    });
  };

  let setFormState = (event) => {
    setAddressData({
      ...addressData,
      state: event.target.value,
    });
  };

  let setFormZip = (event) => {
    setAddressData({
      ...addressData,
      zip: event.target.value,
    });
  };

  let nextPayment = (event) => {
    event.preventDefault();
    console.log(addressData);
    props.dispatch({
      type: "ADDRESS_DATA",
      payload: addressData,
    });
    props.history.push("/checkout/payment");
  };
  return (
    <div
      className="shipping-address"
      style={{ marginLeft: "5%", marginRight: "5%", marginTop: "5%" }}
    >
      {!props.cart && props.history.push("/")}
      <h3 style={{ textAlign: "center" }}>Shipping Address</h3>
      <form>
        <div className="form-group">
          <label htmlFor="formUsername">User Name</label>
          <input
            type="text"
            className="form-control required"
            id="formUsername"
            placeholder="Enter Your Name"
            required={true}
            onChange={setFormUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="validationTextarea">Address</label>
          <textarea
            className="form-control is-invalid"
            id="validationTextarea"
            placeholder="Required example textarea"
            required
            name="address"
            onChange={setFormAddress}
          ></textarea>
          <div className="invalid-feedback">Please enter address.</div>
        </div>
        <div className="form-row">
          <div className="col-7">
            <input
              type="text"
              className="form-control city"
              placeholder="City"
              required={true}
              name="city"
              onChange={setFormCity}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control state"
              placeholder="State"
              required={true}
              name="state"
              onChange={setFormState}
            />
          </div>
          <div className="col">
            <input
              type="text"
              className="form-control zip required"
              placeholder="Zip"
              required={true}
              name="zip"
              onChange={setFormZip}
            />
          </div>
        </div>
        <div className="col-auto text-center">
          <button onClick={nextPayment} type="submit" className="btn btn-primary">
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
Address = withRouter(Address);
export default connect(function (state, action) {
  return {
    cart: state?.cart,
  };
})(Address);
