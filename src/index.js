import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router'
import { Route } from 'react-router'
import { Redirect} from 'react-router'
import { browserHistory } from 'react-router'
import { Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import * as firebase from 'firebase'

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

ReactDOM.render(<App />, document.getElementById('root'))
