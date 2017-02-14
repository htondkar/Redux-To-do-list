import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import TaskRow from './TaskRow';



// {this.props.tasks.map((task) => {
//   return <TaskRow
//     task={task}
//     key={task.id}
//     stateChangeMethods={this.props.stateChangeMethods}/>
// })}

 export default class ListPage extends React.Component {

  // <CSSTransitionGroup
  //   className='task'
  //   component='ul'
  //   transitionName='task'
  //   transitionEnterTimeout={500}
  //   transitionLeaveTimeout={500}>
  //     xxxx
  // </CSSTransitionGroup>

  render() {
    return (
      <div className='list-page'>
        <div className="task-row-wrapper">
          this is the list comp.
          <button onClick={()=>browserHistory.push('/create')}>create new</button>

        </div>
      </div>
    );
  }
}

ListPage.propTypes = {
};
