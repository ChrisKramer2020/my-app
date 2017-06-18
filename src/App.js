import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'

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
      speed: 10
    }
  }

  // const auth = firebase.auth()
  // auth.signInWithEmailAndPassword(email, pass)
  // auth.createUserWithEmailAndPassWord(email, pass)
  // authonAuthStateChanged(firebaseUser => {
  //
  // })

  componentDidMount () {
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })

    const txtEmail = document.getElementById('txtEmail')
    const txtPassword = document.getElementById('txtPassword')
    const btnLogin = document.getElementById('btnLogin')
    const btnSignup = document.getElementById('btnSignup')
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
      promise.catch(function(e){
        console.log(e)
      })

    // Add Signup Event

    btnSignup.addEventListener('click', e => {
      const email = txtEmail.value
      const pass = txtPassword.value
      const auth = firebase.auth()

      // Sign in

      const promise = auth.createUserWithEmailAndPassWord(email, pass)
      promise.catch(e => console.log(e.message))
      })

      btnLogout.addEventListener('click', e => {
        firebase.auth().signOut()
      })

      // Add a Realtime Listener

      firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
          console.log(firebaseUser)
          btnLogout.classList.remove('hide')
        } else {
          console.log('not logged in')
          btnLogout.classList.add('hide')
        }

      })

    })
  }




  render () {
    return (
      <div className="App">
        <div class="container">
          <input id="txtEmail" type="email" placeholder="Email">
          </input>
          <input id="txtPassword" type="password" placeholder="Password">
          </input>
          <button id="btnLogin" class="btn btn-action">
            Log In
          </button>
          <button id="btnSignUp" class="btn btn-secondary">
            Sign Up
          </button>
          <button id="btnLogout" class="btn btn-action hide">
            Log Out
          </button>
        </div>
        <h1>{this.state.speed}</h1>
      </div>
    )
  }
}

export default App
