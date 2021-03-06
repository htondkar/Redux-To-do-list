import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Header from './Header';

class Main extends React.Component {

  constructor(){
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <main id="container">
        <div className="wrap">
          <div className="title">
            <h1>To-do list</h1>
          </div>
          <div className="app-wrapper">
            <nav className="header">
              <Header/>
            </nav>
            <CSSTransitionGroup component='div' transitionName='routing' transitionAppear={false}
              transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
                {React.cloneElement(this.props.children, {...this.props, key: location.pathname})}
            </CSSTransitionGroup>
          </div>
        </div>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

Main.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  actions: PropTypes.objectOf(PropTypes.func)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
