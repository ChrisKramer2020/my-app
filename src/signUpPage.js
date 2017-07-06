import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import App from './App'
import * as firebase from 'firebase'
import { Router } from 'react-router'
import { Route } from 'react-router'




class signUpPage extends Component {


  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div>
        <h2>Sign Up Please</h2>
        <form></form>
      </div>
    )
  }

}

export default signUpPage
