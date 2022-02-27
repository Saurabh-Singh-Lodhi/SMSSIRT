// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
  list: []
};

// Reducer
export default function aboutListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.DELETE_ABOUT_SUCCESS:
      return { ...state, about: action.payload };
    case types.LIST_ABOUT_SUCCESS:
      return { ...state, listAbout: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}