import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import * as firebase from 'firebase'
import SignUpPage from './SignUpPage'
import Home from './Home'
import Layout from './Layout'
import Submit from './Submit'
import createBrowserHistory from 'history/createBrowserHistory'

const history = createBrowserHistory()

var config = {
  apiKey: 'AIzaSyB-tl6QlrDLS8hrZ3DtNfMCv0kD6RtpKBg',
  authDomain: 'my-app-47dc0.firebaseapp.com',
  databaseURL: 'https://my-app-47dc0.firebaseio.com',
  projectId: 'my-app-47dc0',
  storageBucket: '',
  messagingSenderId: '532473625190'
}

firebase.initializeApp(config)

registerServiceWorker()

ReactDOM.render(
  <Router>
    <div>
      <nav id="nav-bar">
      <ul id="hide">
        <li><Link to="/">App.js</Link></li>
        <li><Link to="/SignUpPage">Sign Up</Link></li>
        <li><Link to="/Layout">Layout</Link></li>
        <li><Link to="/Submit">Submit</Link></li>
        <li><Link to="/Home">Home</Link></li>
      </ul>
    </nav>

      <Route exact path="/" component={App}/>
      <Route exact path="/SignUpPage" component={SignUpPage}/>
      <Route path="/Layout" component={Layout}/>
      <Route path="/Home" component={Home}/>
      <Route path="/Submit" component={Submit} history={history} />
    </div>
  </Router>, document.getElementById('root'))
