import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import candlesReducer from './candles/candles.reducer';
import cartReducer from './cart/cart.reducer';
import detailsReducer from './details/details.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
  };

const rootReducer = combineReducers({
    // candles: candlesReducer,
    cart: cartReducer,
    details: detailsReducer,
    directory: directoryReducer,
    shop: shopReducer,
    
});

export default persistReducer(persistConfig, rootReducer);