import { combineReducers } from 'redux';

import candlesReducer from './candles/candles.reducer';

export default combineReducers({
    candles: candlesReducer
});
