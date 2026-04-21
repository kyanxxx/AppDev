import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware, { Saga } from 'redux-saga';

import auth from './auth';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
});

export default () => {
  const store = createStore(rootReducer as any, applyMiddleware(sagaMiddleware));
  const runSaga = (saga: Saga) => sagaMiddleware.run(saga);

  return { store, runSaga };
};
