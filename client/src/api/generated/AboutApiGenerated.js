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
 *  TO CUSTOMIZE APIS IN AboutApiGenerated.js PLEASE EDIT ../AboutApi.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 
// Dependencies
import axios from "axios";
import { properties } from "../../config/properties";

class AboutApiGenerated {

  static contextUrl = properties.endpoint + "/about";

  // CRUD METHODS

  /**
  * aboutService.create
  *   @description CRUD ACTION create
  *
  */
  static createAbout(about) {
    return axios.post(AboutApiGenerated.contextUrl, about )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * aboutService.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  static deleteAbout(id) {
    return axios.delete(AboutApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * aboutService.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  static getOneAbout(id) {
    return axios.get(AboutApiGenerated.contextUrl + "/" + id)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * aboutService.list
  *   @description CRUD ACTION list
  *
  */
  static getAboutList() {
    return axios.get(AboutApiGenerated.contextUrl)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }

  /**
  * aboutService.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  static saveAbout(about) {
    return axios.post(AboutApiGenerated.contextUrl + "/" + about._id, about )
      .then(response => {
        return response.data;
      })
      .catch(error => {
        throw error;
      });
  }



    // Custom APIs
}

export default AboutApiGenerated;
