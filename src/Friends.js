import React, { Component } from 'react'
import './Friends.css'

class Friends extends Component {
  constructor(props) {
    super(props);
    this.state={}
    this.submitRecipe= this.submitRecipe.bind(this)
  }

  submitRecipe () {
    console.log('button Clicked')
    this.props.history.push('/')
  }
  render () {
    return <div>
      <h2>Friends Page</h2>
      <button onClick={this.submitRecipe}>Submit it</button>
    </div>
  }
}

export default Friends
