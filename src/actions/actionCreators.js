
import * as actionTypes from './actionTypes';

export function clearAllTasks() {
  return {type: actionTypes.CLEAR_ALL_TASKS};
}

export function removeTask(taskId) {
  return {type: actionTypes.REMOVE_TASK, taskId};
}

export function editTask(taskId, data) {
  return {type: actionTypes.EDIT_TASK, taskId, data};
}

export function createNewTask(data) {
  return {type: actionTypes.CREATE_NEW_TASK, data};
}
