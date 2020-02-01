import {letAuth} from "./authReduser";

const INITIALIZED_SUCCESS = 'SOCIAL-NETWORK/APP/INITIALIZED_SUCCESS';

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => async (dispatch) => {
        let promise = dispatch(letAuth());
        await Promise.all([promise]);
        dispatch(initializedSuccess());
};


let initialState = {
    initialized: false

};

const appReducer = (state = initialState, action) => {

    switch (action.type) {

        case INITIALIZED_SUCCESS:

            return {
                ...state,
                initialized: true
            }


        default:
            return state;

    }
}

export default appReducer;