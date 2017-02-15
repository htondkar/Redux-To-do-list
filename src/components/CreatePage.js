import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import TaskForm from './TaskForm';

export default class CreatePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      progress: 0,
    };
  }

  handleFormChange = event => {
    if (typeof(event) == 'number') {
      this.setState({progress: event});
    } else if (event.target.nodeName == 'INPUT') {
      this.setState({title: event.target.value});
    } else {
      this.setState({description: event.target.value});
    }
  }

  handleSave = () => {
    const formData = {...this.state}
    formData.creationDate = new Date();
    formData.id = Math.random().toString(16).slice(2);
    this.props.actions.createNewTask(formData);
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="create-page">
        <TaskForm
          handleFormChange={this.handleFormChange}
          handleSave={this.handleSave}
          progress={this.state.progress}
          title={this.state.title}
          description={this.state.description}/>
      </div>
    );
  }
}

CreatePage.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func)
};
