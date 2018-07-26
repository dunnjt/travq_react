import React, { Component, Fragment } from 'react'
import Router from './Router'
import IsLoggedIn from './isLoggedIn'
import Navbar from './shared/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

class App extends Component {
  render() {
    return (
      <Fragment>       
        <Navbar />
        <Router />
      </Fragment>
    );
  }
}

export default App;
