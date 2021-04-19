var reducers = function (
  state = {
    user: null,
    cart: null,
    address_data: null,
    payment_data: null,
  },
  action
) {
  switch (action.type) {
    case "INIT_CUSTOMER_DATA": {
      state = { ...state };
      state["user"] = action.payload;
      return state;
    }

    case "INIT_CART_DATA": {
      state = { ...state };
      state["cart"] = action.payload;
      return state;
    }

    case "LOGIN": {
      state = { ...state };
      state["user"] = action.payload;
      return state;
    }

    case "CART": {
      state = { ...state };
      state["cart"] = action.payload;
      return state;
    }

    case "ADDRESS_DATA": {
      state = { ...state };
      state["address_data"] = action.payload;
      return state;
    }

    case "PAYMENT_DATA": {
      state = { ...state };
      state["payment_data"] = action.payload;
      return state;
    }

    case "LOGOUT": {
      state = { ...state };
      localStorage.clear();
      delete state["user"];
      delete state["cart"];
      delete state["address_data"];
      delete state["payment_data"];
      return state;
    }

    default:
      return state;
  }
};
export default reducers;
