import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import SignUpPage from './SignUpPage'
import Layout from './Layout'

var config = {
  apiKey: 'AIzaSyB-tl6QlrDLS8hrZ3DtNfMCv0kD6RtpKBg',
  authDomain: 'my-app-47dc0.firebaseapp.com',
  databaseURL: 'https://my-app-47dc0.firebaseio.com',
  projectId: 'my-app-47dc0',
  storageBucket: '',
  messagingSenderId: '532473625190'
}

class App extends Component {

  constructor () {
    super()
    this.state = {
      speed: 10,
      name: ' ',
      favNumber: 99,
      userName: ''
    }
  }

  componentDidMount () {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
    const userRef = rootRef.child('userName')
    userRef.on('value', snap => {
      this.setState({
        userName: snap.val()
      })
    })

    const txtEmail = document.getElementById('txtEmail')
    const txtPassword = document.getElementById('txtPassword')
    const btnLogin = document.getElementById('btnLogin')
    const btnSignUp = document.getElementById('btnSignUp')
    const btnLogout = document.getElementById('btnLogout')


    // Add Login Event

   btnLogin.addEventListener('click', e => {

      // Get email and pass
      // TODO: Check for real email

      const email = txtEmail.value
      const pass = txtPassword.value
      const auth = firebase.auth()
      // Sign in

      const promise = auth.signInWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e))



    // Add Signup Event

      btnSignUp.addEventListener('click', e => {
      // const email = txtEmail.value
      // const pass = txtPassword.value
      // const auth = firebase.auth()
      // TODO: Check for real email
      // Sign in
      var firebaseUser = null
      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          var displayName = firebaseUser.displayName
          var email = firebaseUser.email
          var emailVerified = firebaseUser.emailVerified
          var photoURL = firebaseUser.photoURL
          var uid = firebaseUser.uid
          var phoneNumber = firebaseUser.phoneNumber
          var providerData = firebaseUser.providerData
          firebaseUser.getToken().then(function(accessToken) {
            document.getElementById('sign-in-status').textContent = 'Signed in';
            document.getElementById('sign-in').textContent = 'Sign out';
            document.getElementById('account-details').textContent = JSON.stringify({
              displayName: displayName,
              email: email,
              emailVerified: emailVerified,
              photoURL: photoURL,
              uid: uid,
              phoneNumber: phoneNumber,
              providerData: providerData
            }, null, '  ')
          });
          console.log(firebaseUser)
          btnLogout.classList.remove('hide')
        } else {
          // if user is signed out
          document.getElementById('sign-in-status').textContent = 'Signed out';
          document.getElementById('sign-in').textContent = 'Sign in';
          document.getElementById('account-details').textContent = 'null';
          console.log('not logged in')
          btnLogout.classList.add('hide')
        }

      })
      const promise = auth.createUserWithEmailAndPassword(email, pass)
      promise.catch(e => console.log(e.message))
      })

      btnLogout.addEventListener('click', e => {
        const email = txtEmail.value
        const pass = txtPassword.value
        const auth = firebase.auth()
        firebase.auth().signOut()

      })
    })
  }



  render () {
      var Alert = require('react-bootstrap').Alert;
      const preObject = document.getElementById('object')
      const dbRefObject = firebase.database().ref().child('object')
      dbRefObject.on('value', snap => console.log(snap.val()))

      // const otherRef = dbRefObject.child('favNumber')
      // dbRefObject.on('value', snap => {
      //   this.setState({
      //     favNumber: snap.val()
      //   })
      // })

    return (

      <div className="App">
        <header>
          <span id="logged-in">{this.displayName}</span>
          <span id="sign-in">{this.email}</span>
          <span id="sign-in-status"></span>
          <span id="account-details"></span>
        </header>
        <div id="background-image-con">
          <div id="background-image">
            <div id="firebaseui-auth-container"></div>
          </div>
        </div>
          <div className="container">
          </div>
          <br />
           <div id="btnContainer">
            <button id="btnLogin" className="btn btn-action">
              <NavLink to="./Home">
              Log In
            </NavLink>
            </button>
            <button id="btnLogout" className="btn btn-action hide">
              <NavLink to="/">
              Log Out
            </NavLink>
            </button>
          </div> 
          <div id="firebaseui-auth-container"></div>
          <footer id="foot">
          </footer>
          <pre id="object">

          </pre>
        </div>
    )
  }
}

export default App
