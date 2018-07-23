import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import {persistStore, autoRehydrate} from 'redux-persist'

import { rootReducer } from './store'
import rootSagas from './sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware),
        autoRehydrate()
    )

);

// Run the sagas
sagaMiddleware.run(rootSagas)

export default store;
