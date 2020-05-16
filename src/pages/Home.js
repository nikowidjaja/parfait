import React, { Component } from 'react'
import Footer from '../partial/Footer'
import Navbar from '../partial/Navbar'

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <Navbar />
                <div className="top">
                    <h1>The power of website for your brand.</h1>
                    <img src={require("../assets/images/Home.png")} alt="Home" />
                </div>

                <div className="container we-help">
                    <h1>We help you create</h1>
                    <h1>what's beyond website.</h1>
                    <div className="we-help__item">
                        <div className="we-help__box">
                            <h1>Visual</h1>
                            <p>We think deeply about our design. From line, shape, even art will be made just for you</p>
                        </div>
                        <div className="we-help__box">
                            <h1>Functional</h1>
                            <p>We create fluid, fast, reliable website. We will take care of your website even after purchase. You can easily request any changes in the future. </p>
                        </div>
                    </div>
                </div>

                <div className="product univ">
                    <div className="product__item">
                        <img src={require("../assets/images/Univ Logo.svg")} alt="Arrow" />
                        <div className="product__item__flex">
                            <p>Online mentor booking</p>
                            <img src={require("../assets/images/Black Arrow.svg")} alt="Arrow" />
                        </div>
                    </div>
                </div>

                <div className="product serem">
                    <div className="product__item">
                        <img src={require("../assets/images/Fix Serem Logo.png")} alt="Arrow" />
                        <div className="product__item__flex">
                            <p>Horror story sharing</p>
                            <img src={require("../assets/images/White Arrow.svg")} alt="Arrow" />
                        </div>
                    </div>
                </div>

                <div className="container talk">
                    <h1>Let's talk about you</h1>
                    <div onClick={()=>{window.location.href="/contact"}} className="talk__box">
                        <p>Contact</p>
                        <img src={require("../assets/images/White Arrow.svg")} alt="Arrow" />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
