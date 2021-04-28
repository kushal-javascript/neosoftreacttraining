import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";

function OrderPlace(action) {
  return axios({
    method: "post",
    url: "https://apibyashu.herokuapp.com/api/addcakeorder",
    data: action.payload,
    headers: {
      authtoken: localStorage.token,
    },
  });
}

function* OrderPlaceGenerator(action) {
  var result = yield call(OrderPlace, action);
  //based on result of task
  //we will disptch different type of requests
  yield put({ type: "ORDER_PLACE", payload: result.data });
}

export function* OrderPlaceSaga() {
  yield takeEvery("ORDER_PLACE", OrderPlaceGenerator);
}
