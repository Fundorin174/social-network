
const SET_FRENDS = 'SOCIAL-NETWORK/NAVBAR/SET_FRENDS';
const DELETE_FROM_FRENDS = 'SOCIAL-NETWORK/NAVBAR/DELETE_FROM_FRENDS';
const SET_FRENDS_TO_LOCAL_STATE = 'SOCIAL-NETWORK/NAVBAR/SET_FRENDS_TO_LOCAL_STATE';


export const setFrends = (frend) => (
{type: SET_FRENDS, frend}
)
export const setFrendsToLocalState = () => (
{type: SET_FRENDS_TO_LOCAL_STATE}
)



export const deleteFromFrends = (frend) => ({
  type: DELETE_FROM_FRENDS,
  frend
})

export const addToFrends = (frend) => (dispatch) => {
  dispatch(setFrends(frend))
}

let initialState = {
    frends: []
};

const navBarReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_FRENDS:
 
      return {
        ...state,
        frends: [...state.frends].concat(action.frend)
      }

      case DELETE_FROM_FRENDS:
      return {
        ...state,
        frends: state.frends.filter(frend => frend.id !== action.frend.id)
      }
    default:
       return state;
  }

}

export default navBarReducer;