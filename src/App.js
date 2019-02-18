import React, { Component, Fragment } from 'react';
import { FacebookProvider, Comments, CommentsCount } from 'react-facebook'

import './App.css';
import Header from './components/normals/header'
import Children1 from './components/normals/children1'
import ImageShow from './components/normals/image-show'
import HowItWorks from './components/normals/how-it-works'
import Benifit from './components/normals/benifit'
import SlideShow from './components/normals/slide-show'
import Footer from './components/normals/footer'


class App extends Component {


  render() {
    return (
      <div>
        <Header />

        <br /><br />

        <div className="container">
          <Children1 />
        </div>



        <ImageShow />



        <div className="container">
          <h1 className="text-center">How HomeShare Works</h1><br /><br /><br />

          <br /><br />
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <HowItWorks imgSrc="images/how_it_works_1.png">
                <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
              </HowItWorks>
            </div>
          </div>

          <br /><br />
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <HowItWorks imgSrc="images/how_it_works_2.png" isImageRight>
                <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
              </HowItWorks>
            </div>
          </div>

          <br /><br />
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <HowItWorks imgSrc="images/how_it_works_3.png">
                <p>Select a room in one of our partner buildings. Then, schedule a call or in-person tour.</p>
              </HowItWorks>
            </div>
          </div>

        </div>

        <br /><br /><br /><br />
        <div className="text-center">
          <h1>Benefits</h1>
          <p>So much better than finding a room yourself.</p>
        </div>


        <div className="row">
          <div className="col-md-10 offset-md-1">
            <Benifit />
          </div>
        </div>

        <br /><br /><br /><br />
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h4>HEAR FROM OUR RESIDENTS</h4>
            <SlideShow />
          </div>
        </div>

        <br /><br /><br /><br />
        <div className="container text-center">
          <FacebookProvider appId="346089532660486">
            <Comments href="https://vhc-happyhouse.herokuapp.com/" />
            {/* <CommentsCount href="https://vhc-happyhouse.herokuapp.com/" /> */}
          </FacebookProvider>
        </div>



        <br /><br /><br /><br />
        <Footer />

      </div>
    );
  }
}

export default App;
