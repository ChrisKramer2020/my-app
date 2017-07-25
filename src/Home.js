import React, { Component } from 'react'
import logo from './logo.svg'
import './Home.css'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'

class Home extends Component {



  render () {
    return <div>
      <nav>
      <h2>Home</h2>
    </nav>
    <div id="Home-Container">
      <div id="Feed-Container">
        <div id="Feed">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
      </div>
    </div>
    </div>
    </div>
  }
}

export default Home
