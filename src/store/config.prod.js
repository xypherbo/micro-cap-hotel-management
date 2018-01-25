import { createStore } from 'redux';
import rootReducer from '../ducks';

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState
    );
}