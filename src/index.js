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
import './App.css'
import * as firebase from 'firebase'
import Gallery from './Gallery'
import Home from './Home'
import Friends from './Friends'
import News from './News'
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Gallery">Gallery</Link></li>
        <li><Link to="/News">News</Link></li>
        <li><Link to="/Friends">Submit</Link></li>
        {/* <li><Link to="/Home">Home</Link></li> */}
      </ul>
    </nav>

      <Route exact path="/" component={App}/>
      <Route exact path="/Gallery" component={Gallery}/>
      <Route path="/News" component={News}/>
      <Route path="/Friends" component={Friends}/>
      {/* <Route path="/Submit" component={Submit} history={history} /> */}
    </div>
  </Router>, document.getElementById('root'))
