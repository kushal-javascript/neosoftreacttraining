var reducers = function (state = {
    user:null
}, action) {
  switch (action.type) {
    case "INIT_CUSTOMER_DATA": {
        state = {...state}
        state['user'] = action.payload
        return state
    }

    case "INIT_CUSTOMER_DATA": {
        state = {...state}
        state['product_data'] = action.payload
        return state
    }

    case "LOGIN": {
        state = {...state}
        state['user'] = action.payload
        return state
    }
    case "LOGOUT":{
        state = {...state}
        localStorage.clear()
        delete state['user']
        delete state['product_data']
        return state
    }
    
    default:
      return state;
  }
};
export default reducers;
