import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

//middlewares are arrays!
const middlewares = [logger]; //robimy tak żeby w przyszłości móc modyfikować logger array

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;