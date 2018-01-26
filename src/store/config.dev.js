import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../ducks';
import createSagaMiddleware, { END } from 'redux-saga'

export default function configureStore(initialState) {

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                sagaMiddleware
            ),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );

    store.runSaga = sagaMiddleware.run
    store.close = () => store.dispatch(END)

    return store;
}