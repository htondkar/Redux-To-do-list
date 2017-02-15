import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import TaskForm from './TaskForm';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      progress: 0,
    }
  }

  handleFormChange = event => {
    if (typeof(event) === 'number') {
      this.setState({progress: event})
    } else if (event.target.nodeName === 'INPUT') {
      this.setState({title: event.target.value})
    } else {
      this.setState({description: event.target.value})
    }
  }

  handleSave = () => {
    const formData = {...this.state}
    this.props.actions.editTask(this.props.params.taskId, formData);
    browserHistory.push('/');
  }

  componentDidMount() {
    const self = this.props.tasks
      .filter(task => task.id === this.props.params.taskId)[0];
    this.setState({...self});
  }

  render() {
    return (
      <div className="edit-page">
        <TaskForm
          handleFormChange={this.handleFormChange}
          title={this.state.title}
          description={this.state.description}
          progress={this.state.progress}
          handleSave={this.handleSave}/>
      </div>
    );
  }
}

EditForm.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func)
};
