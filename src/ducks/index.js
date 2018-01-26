import { combineReducers } from 'redux';
import navbarDucks from './navbar'
import firebaseDucks from './firebase'

const rootReducer = combineReducers({
    navbarDucks,
    firebaseDucks
});

export default rootReducer;