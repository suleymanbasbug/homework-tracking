import { TeacherActionTypes, TeacherDispatchType, ITeacher } from './../../types/teacher.type';
import {Dispatch} from "redux";
import axios from "../../axiosInstance";

export const getAllTeachers = () => async (dispatch: Dispatch<TeacherDispatchType>) => {
    const response = await axios.get("/teachers.json")
    dispatch({
        type: TeacherActionTypes.GET_ALL_TEACHERS,
        payload: Object.values(response.data)
    })
}

export const setSelectedTeacher = (teacher: ITeacher) => (dispatch: Dispatch<TeacherDispatchType>) => {
    dispatch({
        type: TeacherActionTypes.SET_SELECTED_TEACHER,
        payload: teacher
    })
}