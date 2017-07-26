import React, { Component } from 'react'
import logo from './logo.svg'
import './Home.css'
import * as firebase from 'firebase'
import { NavLink } from 'react-router-dom'

class Home extends Component {



  render () {
    return <div>
    <div id="Home-Container">
      <nav>
        <h2 id="h2-header">Home</h2>
      </nav>
      <div id="background-image-home">
      <div id="Feed-Container">
        <div id="Feed">
          <div id="feed-row-1">
            <div id="story-1">
                <div id="story-1-img-con">
                  <div id="img-back">
              <img src="http://livewallpaper.info/wp-content/uploads/2016/06/4k-resolution-wallpaper4.jpg" width="" height="" id="story-1-img"/>
              <p>This is a paragraph.</p>
              <p>It's amazing what we can accompolish if we work together.</p>
            </div>
            <div id="btn">
              <button>Download</button>
            </div>
            <div id="img-back">
              <img src="http://livewallpaper.info/wp-content/uploads/2016/06/4k-resolution-wallpaper4.jpg" width="" height="" id="story-1-img"/>
              <p>This is a paragraph.</p>
              <p>It's amazing what we can accompolish if we work together.</p>
            </div>
            <div id="btn">
              <button>Download</button>
            </div>
            <div id="img-back">
              <img src="http://livewallpaper.info/wp-content/uploads/2016/06/4k-resolution-wallpaper4.jpg" width="" height="" id="story-1-img"/>
              <p>This is a paragraph.</p>
              <p>It's amazing what we can accompolish if we work together.</p>
            </div>
            <div id="btn">
              <button>Download</button>
            </div>
            </div>
          </div>
          </div>
      </div>
    </div>
    </div>
  </div>
    </div>
  }
}

export default Home
