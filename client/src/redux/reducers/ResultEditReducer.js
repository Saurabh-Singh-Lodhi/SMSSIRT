// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  result: {}
};

// Reducer
export default function resultEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_RESULT_SUCCESS:
      return { ...state, result: action.payload };
    case types.UPDATE_RESULT_SUCCESS:
      return { ...state, result: action.payload };
    case types.GET_RESULT_SUCCESS:
      return { ...state, result: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}