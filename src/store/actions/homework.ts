import { HomeworkActionTypes, HomeworkDispatchType, IHomework } from './../../types/homework.type';
import { Dispatch } from "redux";
import axios from "../../axiosInstance";

export const getAllHomeworks = () => async (dispatch: Dispatch<HomeworkDispatchType>) => {
    const response = await axios.get("/homeworks.json")
    dispatch({
        type: HomeworkActionTypes.GET_ALL_HOMEWORKS,
        payload: Object.values(response.data)
    })
}

export const setSelectedHomework = (homework: IHomework  | null) => (dispatch: Dispatch<HomeworkDispatchType>) => {
    dispatch({
        type: HomeworkActionTypes.SET_SELECTED_HOMEWORK,
        payload: homework
    })
}

export const addHomework = (homework: IHomework) => async (dispatch: Dispatch<HomeworkDispatchType>) => {
    await axios.post("/homeworks.json", homework)
    dispatch({
        type: HomeworkActionTypes.ADD_HOMEWORK,
        payload: homework
    })
}