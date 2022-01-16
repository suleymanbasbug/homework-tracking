import {
  HomeworkActionTypes,
  IHomework,
  HomeworkDispatchType,
} from "../../types/homework.type";

interface IDefaultState {
  allHomeworks: IHomework[];
  selectedHomework: IHomework | null;
}

const defaultState: IDefaultState = {
  allHomeworks: [],
  selectedHomework: null,
};

const homeworkReducer = (
  state: IDefaultState = defaultState,
  action: HomeworkDispatchType
) => {
  switch (action.type) {
    case HomeworkActionTypes.GET_ALL_HOMEWORKS:
      return {
        ...state,
        allHomeworks: action.payload,
      };
    case HomeworkActionTypes.SET_SELECTED_HOMEWORK:
      return {
        ...state,
        selectedHomework: action.payload,
      };
    case HomeworkActionTypes.ADD_HOMEWORK:
      return {
        ...state,
        allHomeworks: [...state.allHomeworks, action.payload],
      };
    default:
      return state;
  }
};

export default homeworkReducer;
