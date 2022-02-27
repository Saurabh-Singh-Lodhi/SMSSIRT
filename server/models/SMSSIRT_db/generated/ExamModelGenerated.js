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
 *  TO CUSTOMIZE examModelGenerated.js PLEASE EDIT ../examModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_SMSSIRT_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * exam
      */
    const examSchema = new mongoose.Schema({
      grade: {
        type: "Object"
      },
      marks: {
        type: "Number"
      },
      rollnumber: {
        type: "String"
      },
      subjectname: {
        type: "String"
      },
      // RELATIONS
      _course: {
        type: Schema.ObjectId,
        ref: "course"
      },
      _student: {
        type: Schema.ObjectId,
        ref: "Student"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("Exam", examSchema));

    return examSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * examModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * examModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * examModel.findBy_course
  *   @description CRUD ACTION findBy_course
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_course(key) {
    return await generatedModel.model.find({ '_course' : key});
  },
  
  /**
  * examModel.findBy_student
  *   @description CRUD ACTION findBy_student
  *   @param Objectid key Id of model to search for
  *
  */
  async findBy_student(key) {
    return await generatedModel.model.find({ '_student' : key});
  },
  
  /**
  * examModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * examModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * examModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
