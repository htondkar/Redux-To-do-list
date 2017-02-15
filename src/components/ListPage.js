import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import TaskRow from './TaskRow';
import ListPageFooter from './ListPageFooter';

export default class ListPage extends React.Component {
  constructor(props) {
     super(props);
     this.state = {
       listType: 'all',
     }
   }

  handleListTypeChange = (type) => {
    this.setState({listType: type})
  }

  filterList = () => {
    if (this.state.listType === 'all') {
      return this.props.tasks;
    } else if (this.state.listType === 'done') {
      return this.props.tasks.filter(task => task.progress === 1)
    } else {
      return this.props.tasks.filter(task => task.progress !== 1)
    }
  }

  render() {

    return (
      <section>
        <div className='list-page'>
          <ul className="task-row-wrapper">
            {this.filterList().map((task) => {
              return <TaskRow
                task={task}
                key={task.id}
                actions={this.props.actions}/>})}
          </ul>
        </div>
        <div className="footer">
          <ListPageFooter
            taskCount={this.props.tasks.length}
            changeListType={this.handleListTypeChange}
            clearAllTasks={this.props.actions.clearAllTasks}
          />
        </div>
      </section>
    );
  }
}

ListPage.propTypes = {
};
