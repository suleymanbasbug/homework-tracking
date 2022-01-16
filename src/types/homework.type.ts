export enum HomeworkActionTypes {
    GET_ALL_HOMEWORKS = 'GET_ALL_HOMEWORKS',
    SET_SELECTED_HOMEWORK = 'SET_SELECTED_HOMEWORK',
    ADD_HOMEWORK = 'ADD_HOMEWORK',
}

export interface IHomework {
    id: number;
    title: string;
    description: string;
    studentId: number;
    teacherId: number;
}

export type HomeworkState = {
    homeworks: IHomework[];
};

export type getAllHomeworks = {
    type: typeof HomeworkActionTypes.GET_ALL_HOMEWORKS;
    payload: IHomework[];
};

export type setSelectedHomework = {
    type: typeof HomeworkActionTypes.SET_SELECTED_HOMEWORK;
    payload: null | IHomework;
};

export type addHomework = {
    type: typeof HomeworkActionTypes.ADD_HOMEWORK;
    payload: IHomework;
};

export type HomeworkDispatchType = getAllHomeworks | setSelectedHomework | addHomework;