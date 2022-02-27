// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import StudentModel from "../models/SMSSIRT_db/StudentModel";
import UserModel from "../models/SMSSIRT_db/UserModel";
import AboutModel from "../models/SMSSIRT_db/AboutModel";
import CourseModel from "../models/SMSSIRT_db/CourseModel";
import ExamModel from "../models/SMSSIRT_db/ExamModel";
import ResultModel from "../models/SMSSIRT_db/ResultModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.SMSSIRT_db_dbUrl);

    // Start Init Models

		StudentModel.init();
		UserModel.init();
		AboutModel.init();
		CourseModel.init();
		ExamModel.init();
		ResultModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_SMSSIRT_db = await mongoose.connect(
        "mongodb://" + properties.SMSSIRT_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_SMSSIRT_db;
  }
}

export default new Database();
