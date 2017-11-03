import React, { Component } from 'react'
import logo from './logo.svg'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'
import './Home.css'

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
    return <div>
      <div id="Home-Container">
        <h2>This is the Home Page</h2>
        <h3>Welcome</h3>
      </div>
      <section id="home-page-pics">
        <figure className="snip1576">
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample104.jpg" alt="sample104" />
          <figcaption>
            <h3>Carnegie <span>Mondover</span></h3>
          </figcaption>
          <a href="#"></a>
        </figure>
        <figure className="snip1576 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample103.jpg" alt="sample103" />
        <figcaption>
          <h3>Jason <span>Response</span></h3>
        </figcaption>
    <a href="#"></a>
      </figure>
      <figure className="snip1576"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample105.jpg" alt="sample105" />
    <figcaption>
      <h3>Phillip <span>Anthropy</span></h3>
    </figcaption>
    <a href="#"></a>
  </figure>
      </section>
    </div>
  }
}

export default Home
