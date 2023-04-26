import { createStore, combineReducers } from 'redux';
import productReducer from './reducer/productReducer';
import cartReducer from './reducer/cartReducer';

const root = combineReducers({
    productReducer,
    cartReducer,
});

const store = createStore(root,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;