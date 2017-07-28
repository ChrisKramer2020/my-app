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
          <div id="feed-row-2">
            <div id="story-2">
            <div id="story-2-img-con">
              <div id="second-img-back">
                <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/2/image.adapt.full.high.jpg/1497976002959.jpg" width="348" height="200" id="second-img"/>
              </div>
              <div id="second-img-back">
                <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/2/image.adapt.full.high.jpg/1497976002959.jpg" width="348" height="200" id="second-img"/>
              </div>
              <div id="second-img-back">
                <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/2/image.adapt.full.high.jpg/1497976002959.jpg" width="348" height="200" id="second-img"/>
              </div>
            </div>
          </div>
          </div>
          <div id ="feed-row-3">
            <div id="story-3">
              <div id="story-3-img-con">
                <div id="third-img-back">
                  <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/1/image_copy_1759217800.adapt.full.high.jpg/1499707425072.jpg" width="348" height="200" id="third-img" />
                </div>
                <div id="third-img-back">
                  <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/1/image_copy_1759217800.adapt.full.high.jpg/1499707425072.jpg" width="348" height="200" id="third-img" />
                </div>
                <div id="third-img-back">
                  <img src="https://www.mathworks.com/content/mathworks/www/en/product/ltc/matlab/jcr:content/mainParsys/band_copy_copy_1038813977/mainParsys/columns_copy/1/image_copy_1759217800.adapt.full.high.jpg/1499707425072.jpg" width="348" height="200" id="third-img" />
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
