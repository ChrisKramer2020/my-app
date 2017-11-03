import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'





class News extends Component {


  constructor () {
    super()
    this.state = {}
  }

  componentDidMount () {

  }

  render () {
    return (
      <div id="Layout">
        <h2>News Page</h2>
      </div>
    )
  }

}

export default News
