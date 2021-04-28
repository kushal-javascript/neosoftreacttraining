import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import { logger, CustomMiddleware } from "./CustomMiddleware";

var middleware = applyMiddleware(logger);

export default createStore(reducers, middleware);
