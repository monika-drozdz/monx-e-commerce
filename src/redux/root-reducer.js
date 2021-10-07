import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import navbarReducer from './navbar/navbar.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };

const rootReducer = combineReducers({
    directory: directoryReducer,
    shop: shopReducer,
    navbar: navbarReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);