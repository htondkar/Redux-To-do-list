import React, {PropTypes} from 'react';
import {browserHistory} from 'react-router';


import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ContentContentPaste from 'material-ui/svg-icons/content/content-paste';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const rightNav = () => (
  <IconMenu
    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  >
    <MenuItem primaryText="Create a new Task" />
  </IconMenu>
);

const styles = {
  title: {
    cursor: 'pointer',
  },
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
