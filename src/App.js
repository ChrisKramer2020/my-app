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
          <div className="container">
          </div>
          <br />

          {/* MARKUP FOR THE FIRST UI SNIPPET */}
        <section className="first-snippet-container">
          <figure className="snip1531">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample17.jpg" alt="sample17" />
            <figcaption>
              <h3>Wisteria Ravenclaw</h3>
              <p>Which is worse, that everyone has his price, or that the price is always so low.</p>
              <div className="icons"><a><i className="ion-social-dribbble-outline"></i></a><a><i className="ion-social-dropbox"></i></a><a><i className="ion-social-instagram-outline"></i></a><a><i className="ion-social-rss"></i></a></div>
            </figcaption>
          </figure>
          <figure className="snip1531"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample47.jpg" alt="sample47" />
          <figcaption>
            <h3>Ursula Gurnmeister</h3>
            <p>I'm killing time while I wait for life to shower me with meaning and happiness.</p>
            <div className="icons"><a><i className="ion-social-dribbble-outline"></i></a><a><i className="ion-social-dropbox"></i></a><a><i className="ion-social-instagram-outline"></i></a><a><i className="ion-social-rss"></i></a></div>
          </figcaption>
        </figure>
        <figure className="snip1531"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample3.jpg" alt="sample3" />
        <figcaption>
          <h3>Ingredia Nutrisha</h3>
          <p>The only skills I have the patience to learn are those that have no real application in life. </p>
          <div className="icons"><a><i className="ion-social-dribbble-outline"></i></a><a><i className="ion-social-dropbox"></i></a><a><i className="ion-social-instagram-outline"></i></a><a><i className="ion-social-rss"></i></a></div>
        </figcaption>
        </figure>
      </section>
        {/* END OF MARKUP FOR THE FIRST UI SNIPPET */}

          <section className="white-bg">
           <div className="png-container">
            <div className="png-logo-row">
              <img src="http://www.glamorous-international.com/userfiles/glamorous-international.com/images/Logo-purple.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
            <div className="png-logo-row">
              <img src="http://moosestooth.net/wp-content/uploads/2016/12/mooses-tooth-small-purple-logo.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
            <div className="png-logo-row">
              <img src="http://diweb.gr/wp-content/uploads/2017/04/logo-purple.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
          </div>
          <div className="lower-png-container">
            <div className="png-logo-row">
              <img src="http://searchengineland.com/figz/wp-content/seloads/2013/09/BT_wavelogo_purple_huge.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
            <div className="png-logo-row">
              <img src="http://uafs.edu/sites/default/files/Departments/Marketing/Lion-Blue.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
            <div className="png-logo-row">
              <img src="http://diweb.gr/wp-content/uploads/2017/04/logo-purple.png" width="100" height="100"/>
              <h3>Business as Usual</h3>
              <p>lorem</p>
            </div>
          </div>
          <div className="img-articles">
            <div className="art-img">
              <img src="" width="250" height="250" />
            </div>
            <div className="art-img">
              <img src="" width="250" height="250" />
            </div>
            <div className="art-img">
              <img src="" width="250" height="250" />
            </div>
          </div>
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
