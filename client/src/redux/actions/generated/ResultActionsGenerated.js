/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  TO CUSTOMIZE FUNCTIONS IN ResultActionsGenerated.js PLEASE EDIT ../ResultActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import ResultApi from "../../../api/ResultApi";

let actionsFunction = {

  //CRUD METHODS

  // Create result
  createResult: function(result) {
    return function(dispatch) {
      return ResultApi
        .createResult(result)
        .then(result => {
          dispatch(actionsFunction.createResultSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createResultSuccess: function(result) {
    return { type: types.CREATE_RESULT_SUCCESS, payload: result };
  },


  // Delete result
  deleteResult: function(id) {
    return function(dispatch) {
      return ResultApi
        .deleteResult(id)
        .then(result => {
          dispatch(actionsFunction.deleteResultSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteResultSuccess: function(result) {
    return { type: types.DELETE_RESULT_SUCCESS, payload: result };
  },


  // Get result
  loadResult: function(id) {
    return function(dispatch) {
      return ResultApi
        .getOneResult(id)
        .then(result => {
          dispatch(actionsFunction.loadResultSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadResultSuccess: function(result) {
    return { type: types.GET_RESULT_SUCCESS, payload: result };
  },

  // Load  list
  loadResultList: function() {
    return function(dispatch) {
      return ResultApi
        .getResultList()
        .then(list => {
          dispatch(actionsFunction.loadResultListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadResultListSuccess: function(list) {
    return { type: types.LIST_RESULT_SUCCESS, payload: list };
  },

	
  // Save result
  saveResult: function(result) {
    return function(dispatch) {
      return ResultApi
        .saveResult(result)
        .then(result => {
          dispatch(actionsFunction.saveResultSuccess(result));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveResultSuccess: function(result) {
    return { type: types.UPDATE_RESULT_SUCCESS, payload: result };
  },


};

export default actionsFunction;
