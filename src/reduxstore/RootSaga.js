import { OrderPlaceSaga } from "./OrderPlaceSaga";
import { OrderDetailSaga } from "./OrderDetailSaga";
import { fork, all } from "redux-saga/effects";

export default function* RootSaga() {
  yield all([fork(OrderPlaceSaga), fork(OrderDetailSaga)]);
}
