import {letAuth} from "./authReduser";

const INITIALIZED_SUCCESS = 'SOCIAL-NETWORK/APP/INITIALIZED_SUCCESS';

type InitializedSuccessActionType = {
  type: typeof INITIALIZED_SUCCESS
}

export const initializedSuccess = ():InitializedSuccessActionType => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => async (dispatch:any) => {
        let promise = dispatch(letAuth());
        await Promise.all([promise]);
        dispatch(initializedSuccess());
};


let initialState = {
    initialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action:any): InitialStateType => {

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