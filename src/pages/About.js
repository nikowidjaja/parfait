import React, { Component } from 'react'
import Footer from '../partial/Footer'
import Navbar from '../partial/Navbar'

export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="about">
                    <div className="about__top">
                        <h1>What we do</h1>
                        <p>We help you create stunning and innovative website for your business.
                        For us visual is as important as functionality.
                        We work with graphic designer to make sure that every website is beautiful and
                        appealing to customer. We make sure text are legible, easy to read, and to be understand.
                We check the website regularly to make sure everything working and running properly.</p>
                    </div>

                    <div className="container talk">
                        <h1>Let's talk about you</h1>
                        <div onClick={()=>{window.location.href="/contact"}} className="talk__box">
                            <p>Contact</p>
                            <img src={require("../assets/images/White Arrow.png")} alt="Arrow" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </React.Fragment>

        )
    }
}
