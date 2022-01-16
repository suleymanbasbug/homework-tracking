import {Dispatch} from "redux";
import {StudentActionTypes, StudentDispatchType, IStudent} from "../../types/student.type"
import axios from "../../axiosInstance"

export const getAllStudent = () => async (dispatch: Dispatch<StudentDispatchType>) => {
    const response = await axios.get("/students.json")
    dispatch({
        type: StudentActionTypes.GET_ALL_STUDENTS,
        payload: Object.values(response.data)
    })
};

export const setSelectedStudent = (student: IStudent|null) => (dispatch: Dispatch<StudentDispatchType>) => {
    dispatch({
        type: StudentActionTypes.SET_SELECTED_STUDENT,
        payload: student
    })
}