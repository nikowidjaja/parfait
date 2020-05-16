import React, { Component } from 'react'
import Navbar from "../partial/Navbar";
import Footer from "../partial/Footer";

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="contact">
                    <h1>Let's talk about you</h1>
                    <div className="contact-flex">
                        <div className="contact-flex__item">
                            <h3>Business Form</h3>
                            <form>
                                <input placeholder="Name" type="text" />
                                <input placeholder="Email" type="email" />
                                <input placeholder="Phone Number" type="tel" />
                                <div className="submit-btn">
                                    <input type="submit" />
                                    <img src={require("../assets/images/Black Arrow.svg")} alt="/" />
                                </div>
                            </form>
                        </div>
                        <div className="contact-flex__item gray">
                            <h3>Contact Us</h3>
                            <p>parfaitstudio@gmail.com</p>
                            <p>+6282243947242</p>
                            <p>Jakarta, Indonesia</p>

                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
