import { combineReducers } from 'redux';
import { counter, counterSaga } from '@/redux/modules/counter';
import { all } from 'redux-saga/effects';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-community/async-storage';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleWare from 'redux-saga';

const rootReducer = combineReducers({
  counter
});

const persistConfig = {
  key: 'root',
  storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

function* rootSaga() {
  yield all([counterSaga()]);
}

export function configureStore() {
  const saga = createSagaMiddleWare();
  const store = createStore(enhancedReducer, applyMiddleware(saga));
  const persistor = persistStore(store);

  saga.run(rootSaga);

  return { store, persistor };
}

export type RootState = ReturnType<typeof rootReducer>;
