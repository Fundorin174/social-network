
const AD_TO_FRENDS = 'SOCIAL-NETWORK/NAVBAR/AD_TO_FRENDS';
const DELETE_FROM_FRENDS = 'SOCIAL-NETWORK/NAVBAR/DELETE_FROM_FRENDS';

export const addToFrends = (frend) => (
{type: AD_TO_FRENDS, frend}
)

export const deleteFromFrends = (frend) => ({
  type: DELETE_FROM_FRENDS,
  frend
})

let initialState = {
    frends: []
};

const navBarReducer = (state = initialState, action) => {

  switch (action.type) {
    case AD_TO_FRENDS:
      // let frends = state.frends.push(action.frend);
      // console.log(frends)
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