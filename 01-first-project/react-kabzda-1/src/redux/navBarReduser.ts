import { FrendType } from "../types/types";

const SET_FRENDS = 'SOCIAL-NETWORK/NAVBAR/SET_FRENDS';
const DELETE_FROM_FRENDS = 'SOCIAL-NETWORK/NAVBAR/DELETE_FROM_FRENDS';
const SET_FRENDS_TO_LOCAL_STATE = 'SOCIAL-NETWORK/NAVBAR/SET_FRENDS_TO_LOCAL_STATE';

type SetFrendsActionType = {
    type: typeof SET_FRENDS, frends: Array<FrendType>
}

export const setFrends = (frends : Array<FrendType>): SetFrendsActionType => (
    {type: SET_FRENDS, frends: frends}
)

type SetFrendsToLocalStateActionType = {
    type: typeof SET_FRENDS_TO_LOCAL_STATE
}

export const setFrendsToLocalState = (): SetFrendsToLocalStateActionType => (
    {type: SET_FRENDS_TO_LOCAL_STATE}
)

type DeleteFromFrendsActionType = {
    type: typeof DELETE_FROM_FRENDS, frend: FrendType
}

export const deleteFromFrends = (frend : FrendType): DeleteFromFrendsActionType => (
    {type: DELETE_FROM_FRENDS, frend}
)

export const addToFrends = (frends : Array<FrendType>) => (dispatch : any) => {
    dispatch(setFrends(frends))
}

type ActionType = SetFrendsActionType | SetFrendsToLocalStateActionType | DeleteFromFrendsActionType

let initialState = {
    frends: [] as Array<FrendType>
};

type InitialStateTYPE = typeof initialState

const navBarReducer = (state = initialState, action : ActionType): InitialStateTYPE => {

    switch (action.type) {
        case SET_FRENDS:

            return {
                ...state,
                frends: [...state.frends].concat(action.frends)
            }

        case DELETE_FROM_FRENDS:
            return {
                ...state,
                frends: state
                    .frends
                    .filter(frend => frend.id !== action.frend.id)
            }
        default:
            return state;
    }

}

export default navBarReducer;