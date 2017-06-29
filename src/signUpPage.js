import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
// import { Link } from 'react-router'
import { Router } from 'react-router'
import { Route } from 'react-router'
// import { Redirect} from 'react-router'




class signUpPage extends Component {


  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div id="signUpPage">
        <form>
          <input>Name</input>
          <input>Age</input>
        </form>
      </div>
    )
  }

}

export default signUpPage
