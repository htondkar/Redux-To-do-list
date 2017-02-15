import React, {PropTypes} from 'react';

import RaisedButton from 'material-ui/RaisedButton';

const style = {
  bottons : {
    marginRight: 10,
  },
  clearAll: {
    float: 'right',
    minWidth: 0,
  }
};

const ListPageFooter = ({taskCount, changeListType, clearAllTasks}) => {
  return (
    <footer className="footer-tools">
      <span className="info">
        {taskCount > 1 ? `${taskCount} Tasks` : `${taskCount} Tasks`}
      </span>
      <ul className="footer-bottons">
        <li><RaisedButton label="all tasks" style={style.bottons} onClick={()=>changeListType('all')} /></li>
        <li><RaisedButton label="finished tasks" style={style.bottons} onClick={()=>changeListType('done')} /></li>
        <li><RaisedButton label="active tasks" style={style.bottons} onClick={()=>changeListType('active')} /></li>
      </ul>
      <RaisedButton label="clear all" style={style.clearAll} onClick={clearAllTasks} />
    </footer>
  );
}

ListPageFooter.propTypes = {
  taskCount: PropTypes.number,
  clearAllTasks: PropTypes.func,
  changeListType: PropTypes.func
};

export default ListPageFooter;
