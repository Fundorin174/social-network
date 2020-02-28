
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
    // console.log(
    //   JSON.stringify(props.frends)
    // )
    // let frendsString = JSON.stringify(props.frends)
    // console.log(
    //   JSON.parse(frendsString)
    // )
// JSON.parse(localStorage.getItem('frends'))
// .concat(JSON.parse(localStorage.frends))
let initialState = {
    frends: []
};

const navBarReducer = (state = initialState, action) => {

  switch (action.type) {
    case SET_FRENDS:
 
      return {
        ...state,
        frends: [...state.frends, action.frend]
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