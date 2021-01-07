import { combineReducers } from 'redux';

import candlesReducer from './candles/candles.reducer';
import cartReducer from './cart/cart.reducer';

export default combineReducers({
    candles: candlesReducer,
    cart: cartReducer,
});
