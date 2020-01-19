import {authAPI} from '../DAL/api';
import {stopSubmit} from "redux-form";
import {letAuth} from "./authReduser";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});


export const initializeApp = () => (dispatch) => {

        let promise = dispatch(letAuth());
        Promise.all([promise]).then(()=> {
        dispatch(initializedSuccess());
        });

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