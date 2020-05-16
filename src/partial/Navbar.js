import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navOpen: false,
            firstTime: true
        }
    }
    toggleNav() {
        this.setState({
            navOpen: !this.state.navOpen,
            firstTime: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="navbar">
                    <img className="logo" src={require("../assets/images/Parfait Logo.svg")} alt="Logo" />
                    {
                        this.state.navOpen ?
                            <img className="puff-in-center nav-btn" onClick={() => { this.toggleNav() }} src={require("../assets/images/menu-active.png")} alt="Button" />
                            :
                            <img className="nav-btn" onClick={() => { this.toggleNav() }} src={require("../assets/images/menu-nonactive.png")} alt="Button" />
                    }
                </div>
                {
                    this.state.firstTime ? "" : (
                        this.state.navOpen ? (
                            <div className="overlay fade-in">
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/work">Work</a></li>
                                    <li><a href="/about">About</a></li>
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>
                        )
                            :
                            <div className="overlay fade-out">
                                <ul>
                                    <li>Home</li>
                                    <li>Work</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                    )
                }

            </React.Fragment>


        )
    }
}
