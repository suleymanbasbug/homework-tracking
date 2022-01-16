import { IUser } from "./user.type";

export enum TeacherActionTypes {
    GET_ALL_TEACHERS = 'GET_ALL_TEACHERS',
    SET_SELECTED_TEACHER = 'SET_SELECTED_TEACHER',
}

export interface ITeacher extends IUser {
}

export type TeacherState = {
    teachers: ITeacher[];
};

export type getAllTeachers = {
    type: typeof TeacherActionTypes.GET_ALL_TEACHERS;
    payload: ITeacher[];
};

export type setSelectedTeacher = {
    type: typeof TeacherActionTypes.SET_SELECTED_TEACHER;
    payload: ITeacher;
};

export type TeacherDispatchType =  setSelectedTeacher | getAllTeachers;

