//import React, { Component } from 'react';
import { setVisibilityFilter} from '../../actions'
import AllProjects from './allprojects'

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setVisibilityFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const Projects = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllProjects)

export default Projects