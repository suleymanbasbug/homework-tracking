import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import homeworkReducer from './homeworkReducer';
import teacherReducer from './teacherReducer';
import authUserReducer from './authUserReducer';

const rootReducer = combineReducers({
    students: studentReducer,
    homeworks: homeworkReducer,
    teachers: teacherReducer,
    authUser: authUserReducer,
});

export default rootReducer;