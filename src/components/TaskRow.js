import React, {PropTypes} from 'react';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const style ={
  borderRadius: 10,
}

const TaskRow = ({task, actions}) => {
  const taskStatus = task.progress === 100 ? 'done' : 'pending'
  const taskProgress = task.progress + '%'
  return (
    <div className={`task-row ${taskStatus}`}>
      <div className="task-info">
        <div>
          <span className='title-row'>{task.title} </span>
          <span
            className='category-row'>
            {`(${task.category} task) `}
          </span>
          {taskStatus === 'done' ?
          <div className="show-status">
            <span>DONE</span>
            <FontIcon className="material-icons">done</FontIcon>
          </div> :
          <span className='date-row'>{`on ${task.creationDate.toDateString()}`}</span>}
        </div>
        <div className="progress">
          <div className="progress-bar"
            role="progressbar"
            style={{'minWidth': '6%', width: taskProgress}}>
            {taskProgress}
          </div>
        </div>
        </div>
      <div className="control">
        <IconMenu
           iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
           anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
           targetOrigin={{horizontal: 'left', vertical: 'bottom'}}
           style={style}>
            <MenuItem
              primaryText={taskStatus === 'pending' ? 'mark as done' : 'mark as not done' }
              onClick={() => console.log('click')}/>
            <MenuItem
              primaryText="remove task"
              onClick={() => console.log('click')}/>
        </IconMenu>
      </div>
    </div>
  );
}

TaskRow.propTypes = {
};

export default TaskRow;
