import React, {PropTypes} from 'react';

import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  silder: {
    width: '60%',
    margin: 0,
  },
  description: {
    width: '100%',
  },
};

const TaskForm = ({handleFormChange, title = '', description = '', progress = 0, handleSave}) => {
  return (
    <form className="edit-form">
      <TextField hintText="Task Title" onChange={handleFormChange} value={title}/>
      <br/>
      <TextField hintText="Description" style={styles.description} value={description}
        multiLine={true} rows={3} onChange={handleFormChange}/>
      <br/>
      <Slider step={0.05} value={progress} style={styles.slider}
        onChange={(event, value)=>handleFormChange(value)}/>
      <div className='progress-info'>{`Task progress: ${(progress*100).toFixed(2)}%`}</div>
      <RaisedButton label="save" primary={true} style={styles.button}
        onClick={handleSave}/>
    </form>);
}

TaskForm.propTypes = {
  title: PropTypes.string,
  progress: PropTypes.number,
  handleSave: PropTypes.func,
  description: PropTypes.string,
  handleFormChange: PropTypes.func
};

export default TaskForm;
