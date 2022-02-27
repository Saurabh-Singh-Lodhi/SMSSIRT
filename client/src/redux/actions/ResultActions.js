import actionsFunction from "./generated/ResultActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import resultApi from "../../api/resultApi";
 
 actionsFunction.loadresultList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return resultApi
     .getresultList()
     .then(list => {
       dispatch(actionsFunction.loadresultSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
