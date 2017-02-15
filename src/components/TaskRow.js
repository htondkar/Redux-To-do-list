import React, {PropTypes} from 'react';

import Paper from 'material-ui/Paper';
import Checkbox from 'material-ui/Checkbox';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';


const TaskRow = ({task, actions}) => {
  const taskStatus = task.progress === 100 ? 'done' : 'pending'
  const taskProgress = task.progress + '%'
  return (
    <li className={`task-row ${taskStatus}`}>
      <div className="task-info">

        <div className='title-row'><span>{task.title} </span></div>

        <div className="info-row">
          {`${task.category} task | `}
          {`Created on ${task.creationDate.toDateString()}`}
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
           targetOrigin={{horizontal: 'left', vertical: 'bottom'}}>
            <MenuItem
              primaryText={taskStatus === 'pending' ? 'mark as done' : 'mark as not done' }
              onClick={() => console.log('click')}/>
            <MenuItem
              primaryText="remove task"
              onClick={() => console.log('click')}/>
        </IconMenu>
      </div>
    </li>
  );
}

TaskRow.propTypes = {
};

export default TaskRow;

{/* <div className="show-status">
  <span>DONE</span>
  <FontIcon className="material-icons">done</FontIcon>
</div> : */}
