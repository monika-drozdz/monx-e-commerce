import SHOP_DATA  from '../shop.data';

const collections = SHOP_DATA;


const INITIAL_STATE = {
    details: collections.items
}

const detailsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default detailsReducer;