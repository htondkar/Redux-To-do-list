import * as actionTypes from '../actions/actionTypes';

export default function tasks(state = [], action) {

    switch (action.type) {

        case actionTypes.CLEAR_ALL_TASKS:
          return [];
          break;

        case actionTypes.REMOVE_TASK:
          return state.filter(task => task.id !== action.taskId);
          break;

        case actionTypes.CREATE_NEW_TASK:
          return [...state, action.data];
          break;

        case actionTypes.EDIT_TASK:
          const nextState = state;
          const index = state.findIndex(task => task.id === action.taskId);
          nextState[index] = action.data;
          return nextState;
          break;

        default:
            return state;
    }
}
