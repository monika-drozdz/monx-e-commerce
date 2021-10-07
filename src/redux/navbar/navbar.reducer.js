import NavBarActionTypes from './navbar.types';

const INITIAL_STATE = {
    hiddenMenu: true,
    navbarItems: []
}

const navbarReducer = ( state = INITIAL_STATE, action ) => {
    switch(action.type) {
        case NavBarActionTypes.TOGGLE_NAVBAR_HIDDEN:
            return {
                ...state,
                hiddenMenu: !state.hiddenMenu,
            }
        default: 
            return state;    
          
    }
}

export default navbarReducer;