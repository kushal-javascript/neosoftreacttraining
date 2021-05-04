import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import mart from "./store";

function OrderDetail(action) {
  console.log("OrderDetail");
  return axios({
    method: "post",
    url: "https://apifromashu.herokuapp.com/api/cakeorders",
    data: {},
    headers: {
      authtoken: localStorage.token,
    },
  });
}

function* OrderDetailGenerator(action) {
  var result = yield call(OrderDetail, action);
  //based on result of task
  //we will disptch different type of requests
  console.log("OrderDetailGenerator 1");
  var userData = mart.getState();
  if (userData.get_order_detail === undefined) {
    console.log("OrderDetailGenerator 2");
    yield put({ type: "GET_ORDER_DETAIL", payload: result.data.cakeorders });
  }
}

export function* OrderDetailSaga() {
  console.log("OrderDetailSaga");
  yield takeEvery("GET_ORDER_DETAIL", OrderDetailGenerator);
}
