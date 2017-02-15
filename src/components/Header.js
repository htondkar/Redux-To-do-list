import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';

const rightNav = () => (
  <IconButton
     iconStyle={styles.addIcon}
     onClick={()=>browserHistory.push('create')}
     tooltip='Create a new Task'
     tooltipPosition="top-left">
       <ActionNoteAdd />
  </IconButton>
);

const styles = {
  title: {
    cursor: 'pointer',
  },
  addIcon: {
    width: 30,
    height: 30,
    color: '#aaa',
  }
};

export default class Header extends React.Component {

  handleTitleClick = () => {
    browserHistory.push('/');
  };

  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Todos</span>}
        onTitleTouchTap={this.handleTitleClick}
        onLeftIconButtonTouchTap={this.handleTitleClick}
        iconElementRight={rightNav()}
        iconElementLeft={<IconButton><ContentContentPaste /></IconButton>}
        />
    );
  }
}



Header.propTypes = {
};
