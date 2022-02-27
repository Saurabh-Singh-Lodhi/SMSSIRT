// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function resultListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_RESULT_SUCCESS:
      return { ...state, result: action.payload };
    case types.LIST_RESULT_SUCCESS:
      return { ...state, listResult: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}