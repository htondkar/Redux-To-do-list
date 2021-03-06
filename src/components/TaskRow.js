import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconButton from 'material-ui/IconButton';

const styles = {
  closeIcon: {
    width: 20,
    height: 20,
    color: '#aaa',
  }
}

const TaskRow = ({task, actions}) => {
  const taskStatus = task.progress === 1 ? 'done' : 'pending'
  const taskProgress = task.progress*100 + '%'
  return (
    <li className={`task-row ${taskStatus}`}>
      <section className="task-info" onClick={() => browserHistory.push(`edit/${task.id}`)}>

        <div className='title-row'><span to={`edit/${task.id}`}>{task.title}</span></div>

        <div className="info-row">
          {`Created on ${task.creationDate.toDateString()}`}
        </div>

        <div className="progress">
          <div className="progress-bar"
            role="progressbar"
            style={{'minWidth': '6%', width: taskProgress}}>
            {taskProgress}
          </div>
        </div>

      </section>
      <section className="control">
        <IconButton
           iconStyle={styles.closeIcon}
           hoveredStyle={styles.closeIconHover}
           onClick={() => actions.removeTask(task.id)}
           tooltip='remove task'
           tooltipPosition="top-left">
             <NavigationClose />
        </IconButton>
      </section>
    </li>
  );
}

TaskRow.propTypes = {
  task: PropTypes.object,
  actions: PropTypes.objectOf(PropTypes.func)
};

export default TaskRow;
