import { Actions } from "../actions/actions";

const userReducer = ( state = { user: {} }, action ) => {
    switch ( action.type ) {
        case Actions.SET_USER:
            return state.user = { ...action.payload };

        case Actions.CLEAR_USER:
            return state.user = {};

        default:
            return state;
    }
};

export default userReducer;
