import { combineReducers } from "redux";

// START IMPORT REDUCERS
import HomeReducer from "./HomeReducer";
import StudentEditReducer from "./StudentEditReducer";
import StudentListReducer from "./StudentListReducer";
import AboutEditReducer from "./AboutEditReducer";
import AboutListReducer from "./AboutListReducer";
import CourseEditReducer from "./CourseEditReducer";
import CourseListReducer from "./CourseListReducer";
import ExamEditReducer from "./ExamEditReducer";
import ExamListReducer from "./ExamListReducer";
import ResultEditReducer from "./ResultEditReducer";
import ResultListReducer from "./ResultListReducer";

// END IMPORT REDUCERS


// CUSTOM REDUCERS
import LoginReducer from "./LoginReducer";
import ProfileReducer from "./ProfileReducer";
import UserEditReducer from "./UserEditReducer";
import UserListReducer from "./UserListReducer";

const rootReducer = combineReducers({
  
  // INSERT HERE YOUR CUSTOM REDUCERS
  LoginReducer,
  ProfileReducer,
  UserEditReducer,
  UserListReducer,

  // START COMBINE REDUCERS
	HomeReducer,
	StudentEditReducer,
	StudentListReducer,
	AboutEditReducer,
	AboutListReducer,
	CourseEditReducer,
	CourseListReducer,
	ExamEditReducer,
	ExamListReducer,
	ResultEditReducer,
	ResultListReducer,
 // END COMBINE REDUCERS

});

export default rootReducer;
