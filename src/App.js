import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import Friends from './Friends'
import News from './News'
import Gallery from './Gallery'

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
    // WHEN COMPONENT MOUNTS GO TO FIREBASE DATABASE AND LOOK FOR A CHILD NODE CALLED "SPEED"
    const rootRef = firebase.database().ref()
    const speedRef = rootRef.child('speed')
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      })
    })
    // EVERYTIME THE SPEED VALUE CHANGES IN THE FIREBASE DATABASE IT WILL UPDATE OUR STATE TO THE NEW VALUE WE SET IN THE DATABASE
    const userRef = rootRef.child('userName')
    userRef.on('value', snap => {
      this.setState({
        userName: snap.val()
      })
    })

    // THESE ARE JUST REFERENCES TO THE JSX ELEMENTS WITH THEIR ID
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
            <h1>A place to be you.</h1>
          </div>
        </div>
        <div id="firebaseui-auth-container"></div>
        {/* <div id="firebaseui-auth-container"></div> */}
          <div className="container">
          </div>
          <br />
          <section className="second-snip">
            <figure class="snip1570">
              <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample88.jpg" alt="sample88" /><i class="ion-android-arrow-forward"></i>
              <h3>Malcolm Function</h3>
              <a href="#"></a>
            </figure>
            <figure class="snip1570 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample106.jpg" alt="sample106" /><i class="ion-android-arrow-forward"></i>
            <h3>Richard Tea</h3>
            <a href="#"></a>
          </figure>
            <figure class="snip1570"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample117.jpg" alt="sample117" /><i class="ion-android-arrow-forward"></i>
            <h3>Ingredia Nutrisha</h3>
              <a href="#"></a>
            </figure>
          </section>
          <footer id="foot">
            <section id="footer-spread-one">
              <figure className="snip1577">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample99.jpg" alt="sample99" />
                <figcaption>
                  <h3>Bodrum Salvador</h3>
                  <h4>Luxery</h4>
                </figcaption>
                <a href="#"></a>
              </figure>
              <figure className="snip1577"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample109.jpg" alt="sample109" />
              <figcaption>
                <h3>Jason Response</h3>
                <h4>Classic</h4>
              </figcaption>
              <a href="#"></a>
            </figure>
            <figure className="snip1577"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample117.jpg" alt="sample117" />
            <figcaption>
              <h3>Piff Jenkins</h3>
              <h4>Vintage</h4>
            </figcaption>
            <a href="#"></a>
          </figure>
            </section>
          </footer>
          <pre id="object">

          </pre>
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
      </div>
    )
  }
}

export default App


// BUTTON CONTAINER MIGHT COME IN HANDY LATER
