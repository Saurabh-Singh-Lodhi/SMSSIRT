// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  about: {}
};

// Reducer
export default function aboutEditReducer(state = initialState, action) {
  switch (action.type) { 
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.CREATE_ABOUT_SUCCESS:
      return { ...state, about: action.payload };
    case types.UPDATE_ABOUT_SUCCESS:
      return { ...state, about: action.payload };
    case types.GET_ABOUT_SUCCESS:
      return { ...state, about: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}