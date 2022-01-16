import {
  TeacherActionTypes,
  ITeacher,
  TeacherDispatchType,
} from "../../types/teacher.type";

interface IDefaultState {
  allTeachers: ITeacher[];
  selectedTeacher: ITeacher | null;
}

const defaultState: IDefaultState = {
  allTeachers: [],
  selectedTeacher: null,
};

const teacherReducer = (
  state: IDefaultState = defaultState,
  action: TeacherDispatchType
) => {
  switch (action.type) {
    case TeacherActionTypes.GET_ALL_TEACHERS:
      return {
        ...state,
        allTeachers: action.payload,
      };
    case TeacherActionTypes.SET_SELECTED_TEACHER:
        return {
            ...state,
            selectedTeacher: action.payload,
        };
    default:
      return state;
  }
};

export default teacherReducer;
