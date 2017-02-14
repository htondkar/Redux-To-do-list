
import * as actionTypes from './actionTypes';
import {browserHistory} from 'react-router';


// function beginAjaxCall(task) {
//   return {
//     type: actionTypes.AJAX_CALL_IN_PROGRESS,
//     task: task
//   };
// }
//
// function redirectToDashboard(username){
//    browserHistory.push(`/dashboard/${username}`)
// }
//
//
// function xxxxSuccess(forksList, xxx) {
//   return {
//     type: actionTypes.XXXX_SUCCESS,
//     xxx
//   };
// }
//

//Log in - redux thunk
export function logIn(username, password) {
  return function (dispatch) {
    // return (aSyncAction)
    //     .then(
    //     response => {
    //       dispatch(successfulLogIn(response, username, password));
    //       redirectToDashboard(username);
    //     }
    //     )
    //     .catch(err=> {throw err})
    // );
  };
};
