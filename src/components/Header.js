import React from 'react';
import {browserHistory} from 'react-router';

import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import ActionNoteAdd from 'material-ui/svg-icons/action/note-add';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';

const styles = {
  title: {
    cursor: 'pointer',
  },
  addIcon: {
    width: 35,
    height: 35,
    fill: 'hotpink'
  }
};

const rightNav = () => (
  <IconButton
     iconStyle={styles.addIcon}
     onClick={()=>browserHistory.push('create')}
     tooltip='Create a new Task'
     tooltipPosition="top-left">
       <ActionNoteAdd />
  </IconButton>
);

export default class Header extends React.Component {

  handleTitleClick = () => {
    browserHistory.push('/');
  };

  render() {
    return (
      <AppBar
        iconElementRight={rightNav()}
        onTitleTouchTap={this.handleTitleClick}
        title={<span style={styles.title}>Todos</span>}
        onLeftIconButtonTouchTap={this.handleTitleClick}
        iconElementLeft={<IconButton><ContentContentPaste/></IconButton>}
        />
    );
  }
}

Header.propTypes = {
};
