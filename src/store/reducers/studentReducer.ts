import { StudentActionTypes, IStudent, StudentDispatchType } from "../../types/student.type";

interface IDefaultState {
  allStudents: IStudent[];
  selectedStudent: IStudent | null;
}

const defaultState: IDefaultState = {
  allStudents: [],
  selectedStudent: null
};

const studentReducer = (state:IDefaultState = defaultState, action: StudentDispatchType) => {
    switch (action.type) {
        case StudentActionTypes.GET_ALL_STUDENTS:
            return {
                ...state,
                allStudents: action.payload
            };
        case StudentActionTypes.SET_SELECTED_STUDENT:
            return {
                ...state,
                selectedStudent: action.payload
            };
        default:
            return state;
    }
};

export default studentReducer;