import React, {PropTypes} from 'react';

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
            {this.props.tasks.length === 0 && 'Create a new task'}
            {this.filterList().map((task) => {
              return <TaskRow
                task={task}
                key={task.id}
                actions={this.props.actions}/>})}
          </ul>
        </div>
        <footer className="footer">
          <ListPageFooter
            taskCount={this.props.tasks.length}
            changeListType={this.handleListTypeChange}
            clearAllTasks={this.props.actions.clearAllTasks}
          />
        </footer>
      </section>
    );
  }
}

ListPage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func)
};
