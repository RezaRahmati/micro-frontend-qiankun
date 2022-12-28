import { Actions } from "./actions";

const setUser = ( user ) => {
    return {
        type: Actions.SET_USER,
        payload: user
    };
};
export default setUser;
