import React, {PropTypes} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RouteTransition} from 'react-router-transition';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actions from '../actions/actionCreators';

import Header from './Header';


class Main extends React.Component {

  constructor(){
    super();
    injectTapEventPlugin();
  }

  render() {
    return (
      <div id="container">

        <div className="wrap">

          <div className="title">
            <h1>To-do list</h1>
          </div>

          <div className="app-wrapper">

            <div className="header">
              <Header/>
            </div>

            <RouteTransition
              pathname={this.props.location.pathname}
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}>
                {React.cloneElement(this.props.children, this.props)}
            </RouteTransition>

          </div>

        </div>

      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
