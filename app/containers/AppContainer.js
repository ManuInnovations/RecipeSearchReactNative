import React, { Component } from 'react'
import ReactNative from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import Home from './Home'

class AppContainer extends Component {

  render() {
    return <Home {...this.props} />
  }
}

// A special function to dipatch actions to the entire app.
// Smart component because it is connected to the store and the actions of the app
function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch)
}

//store remains empty here, (but usually a function to manipulate the store). Connect takes in two functions. The first is just returning an empty object. The second function is mapDispatchToProps and passes AppContainer.
//All this stuff is usually just done in the containers, and the other components are simple dumb components.
export default connect((state) => { return {} }, mapDispatchToProps)(AppContainer);
