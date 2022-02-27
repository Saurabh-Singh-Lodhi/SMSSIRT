import AboutApiGenerated from "./generated/AboutApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class AboutApi extends AboutApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get About List
  static getAboutList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/abouts")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default AboutApi;