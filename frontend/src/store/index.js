import { createStore, applyMiddleware } from "redux";
import createSagaMidddleware from "redux-saga";
import { logger } from "redux-logger";

import reducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMidddleware();

const middlewares = [];
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
middlewares.push(sagaMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default store;
