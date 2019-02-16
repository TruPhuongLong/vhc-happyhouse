import React from 'react'

import styles from './slide-show.module.css'
import Resident from './resident'

export default class LiveShow extends React.Component {
    data = [
        { job: 'Student', age: 21, imgSrc: 'images/resident1.jpeg', address: 'Prospect Gardens', content: 'The HomeShare team has made it SO easy to accommodate all of my apartment needs! They are incredibly responsible and honest! Amazing experience, and great for students looking for affordable, clean living in the city!' },
        { job: 'Marketing Director', age: 30, imgSrc: 'images/resident2.jpeg', address: 'Potrero 1010', content: 'Honestly, I\'m super happy with how everything turned out. All the bottlenecks were handled very quickly.' },
        { job: 'Account Executive', age: 22, imgSrc: 'images/resident3.jpeg', address: 'Windsor at Dogpatch', content: 'I was a little worried about the roommate match, but after our meeting I realized that HomeShare\'s placement was spot on. My roommates and I are just alike.  I don\’t regret giving this a try at all. Thank you for this wonderful experience.  ' },
        { job: 'Analyst', age: 24, imgSrc: 'images/resident4.jpeg', address: 'Koreatown - East', content: 'I cannot imagine what life would be like for a recent grad out of college living in the Bay area without HomeShare.' },
        { job: 'Consultant', age: 23, imgSrc: 'images/resident5.jpeg', address: '855 Brannan', content: 'Moving in was SO easy! HomeShare answered my million questions and welcomed me to the community. I\'m so happy to be living here!' },
        { job: 'Chemical Engineer', age: 24, imgSrc: 'images/resident6.jpeg', address: 'Wall Street', content: 'HomeShare has given me the opportunity to live in one of the most beautiful parts of the city at an affordable price! My housemates are awesome and I am looking forward to attend my first HomeShare event. Thanks!' },
        { job: 'Pharmacist', age: 26, imgSrc: 'images/resident7.jpeg', address: 'East Village', content: 'Everyone on the Homeshare team is very responsible, down to earth, and eager to help make this the best living experience! I found  them easy to talk to and they\'ve been so accommodating in coordinating the entire process.' },
        { job: 'Student', age: 26, imgSrc: 'images/resident8.jpeg', address: '150 Van Ness', content: 'I was a little worried about the roommate match, but after our meeting I realized that HomeShare\'s placement was spot on. My roommates and I are just alike.  I don’t regret giving this a try at all. Thank you for this wonderful experience.  ' },
    ]



    render() {

        return (
            <div id="demo" className="carousel slide" data-ride="carousel">

                {/* <!-- Indicators --> */}
                {/* <ul className="carousel-indicators">
                    {
                        this.data.map((resident, index) => {
                            return (
                                <li data-target="#demo" data-slide-to={index} className={index === 0 ? 'active' : null} style={{backgroundColor: 'red'}}></li>
                            )
                        })
                    }
                </ul> */}

                {/* <!-- The slideshow --> */}
                <div className={`carousel-inner ${styles.carouselInner}`}>
                    {
                        this.data.map((resident, index) => {
                            return (<div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <Resident {...resident} />
                            </div>)
                        })
                    }

                </div>

                {/* <!-- Left and right controls --> */}
                <a className={`carousel-control-prev `} href="#demo" data-slide="prev">
                    <span className={`carousel-control-prev-icon`} ></span>
                </a>
                <a className={`carousel-control-next`} href="#demo" data-slide="next">
                    <span className={`carousel-control-next-icon`}></span>
                </a>

            </div>
        )
    }
}