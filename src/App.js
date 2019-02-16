import React, { Component } from 'react';

import './App.css';
import Header from './components/normals/header'
import ImageShow from './components/normals/image-show'
import HowItWorks from './components/normals/how-it-works'
import Benifit from './components/normals/benifit'
import LiveShow from './components/normals/live-show'

class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <br /><br />

        <div className="container">
          <h1>Shared Apartment Living</h1>
          <p>Move into a luxury building at a fraction of the cost. We enable individuals to thrive together as housemates.</p>
        </div>

        <br /><br />

        <ImageShow />

        <br /><br /><br /><br />

        <div className="container">
          <h1 className="text-center">How HomeShare Works</h1><br /><br /><br />

          <div className="container-indent" style={{ marginTop: '70px' }}>
            <HowItWorks imgSrc="images/how_it_works_1.png">
              <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
            </HowItWorks>
          </div>

          <div className="container-indent" style={{ marginTop: '70px' }} >
            <HowItWorks imgSrc="images/how_it_works_2.png" isImageRight>
              <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
            </HowItWorks>
          </div>

          <div className="container-indent" style={{ marginTop: '70px' }} >
            <HowItWorks imgSrc="images/how_it_works_3.png">
              <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
            </HowItWorks>
          </div>

        </div>

        <br /><br /><br /><br />
        <div className="text-center">
          <h1>Benefits</h1>
          <p>So much better than finding a room yourself.</p>
        </div>

        <br /><br /><br /><br />
        <div className="container-indent">
          <Benifit />
        </div>

        <br /><br /><br /><br />
        <h4>HEAR FROM OUR RESIDENTS</h4>
        <LiveShow />

      </div>
    );
  }
}

export default App;
