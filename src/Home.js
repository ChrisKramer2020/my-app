import React, { Component } from 'react'
import logo from './logo.svg'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import './Home.css'
import App from './App'
var firebaseui = require('firebaseui')

var config = {
  apiKey: 'AIzaSyB-tl6QlrDLS8hrZ3DtNfMCv0kD6RtpKBg',
  authDomain: 'my-app-47dc0.firebaseapp.com',
  databaseURL: 'https://my-app-47dc0.firebaseio.com',
  projectId: 'my-app-47dc0',
  storageBucket: '',
  messagingSenderId: '532473625190'
}



class Home extends Component {

  render () {

  return
    <div className="home-container">
      <section className="first-section">
        <div id="firebaseui-auth-container">{firebaseui}</div>
      </section>
      <section className="second-section">

      </section>
    </div>

  }
}
export default Home
