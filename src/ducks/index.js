import { combineReducers } from 'redux';
import navbarDucks from './navbar'
import firebaseDucks from './firebase'
import manageDucks from './manage'

const rootReducer = combineReducers({
    navbarDucks,
    firebaseDucks,
    manageDucks
});

export default rootReducer;