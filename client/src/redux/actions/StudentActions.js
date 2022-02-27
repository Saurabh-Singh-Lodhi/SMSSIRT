import actionsFunction from "./generated/StudentActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import StudentApi from "../../api/StudentApi";
 
 actionsFunction.loadStudentList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return StudentApi
     .getStudentList()
     .then(list => {
       dispatch(actionsFunction.loadStudentSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
