import actionsFunction from "./generated/AboutActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import aboutApi from "../../api/aboutApi";
 
 actionsFunction.loadaboutList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return aboutApi
     .getaboutList()
     .then(list => {
       dispatch(actionsFunction.loadaboutSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
