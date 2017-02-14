import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import TaskRow from './TaskRow';

 export default class ListPage extends React.Component {

  render() {
    return (
      <section>
        <div className='list-page'>
          <div className="task-row-wrapper">
            {this.props.tasks.map((task) => {
              return <TaskRow task={task} key={task.id} actions={this.props.actions}/>})}
          </div>
        </div>
        <div className="footer">
          hellooo
        </div>
      </section>
    );
  }
}

ListPage.propTypes = {
};
