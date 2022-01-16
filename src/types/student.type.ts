import {IUser} from './user.type';

export enum StudentActionTypes {
    GET_ALL_STUDENTS = 'GET_ALL_STUDENTS',
    SET_SELECTED_STUDENT = 'SET_SELECTED_STUDENT'
}

export interface IStudent extends IUser {
}

export type StudentState = {
    students: IStudent[];
}

export type getAllStudent = {
    type: typeof StudentActionTypes.GET_ALL_STUDENTS;
    payload: IStudent[];
}

export type setSelectedStudent = {
    type: typeof StudentActionTypes.SET_SELECTED_STUDENT;
    payload: null | IStudent;
}


export type StudentDispatchType = getAllStudent | setSelectedStudent;