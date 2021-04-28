import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { logger, CustomMiddleware } from "./CustomMiddleware";
import createSaga from "redux-saga";
import thunk from "redux-thunk"
import { OrderPlaceSaga } from "./OrderPlaceSaga";
import { OrderDetailSaga } from "./OrderDetailSaga";

var sagaMiddleware = createSaga();

//When custom Middleware use than below code apply
//var middleware = applyMiddleware(logger);

//When custom Middleware with redux saga
var middleware = applyMiddleware(sagaMiddleware, thunk);

export default createStore(reducers, middleware);

sagaMiddleware.run(OrderPlaceSaga);
sagaMiddleware.run(OrderDetailSaga);
