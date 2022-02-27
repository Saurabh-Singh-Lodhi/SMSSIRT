import ResultApiGenerated from "./generated/ResultApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class ResultApi extends ResultApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Result List
  static getResultList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/results")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default ResultApi;