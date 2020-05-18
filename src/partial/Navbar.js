import React, { Component } from 'react';

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

        //SCROLL FUNCTION
        if (this.state.navOpen === false) {
            console.log("closed");

            let prevScrollpos = window.pageYOffset;

            window.onscroll = function () {
                var currentScrollPos = window.pageYOffset;
                let mq = window.matchMedia("(max-width: 700px)").matches;
                if (prevScrollpos > currentScrollPos) {
                    mq ? document.querySelector(".navbar").style.top = "3%" : document.querySelector(".navbar").style.top = "10%";
                } else {
                    document.querySelector(".navbar").style.top = "-100px";
                }
                prevScrollpos = currentScrollPos;
            }
        }

        //END OF SCROLL FUNCTION

        return (
            <React.Fragment>
                <div className="navbar">
                    <img className="logo" src={require("../assets/images/Parfait Logo.svg")} alt="Logo" />
                    {
                        this.state.navOpen ?
                            <img className="puff-in-center nav-btn" onClick={() => { this.toggleNav() }} src={require("../assets/images/Menu.png")} alt="Button" />
                            :
                            <img className="nav-btn" onClick={() => { this.toggleNav() }} src={require("../assets/images/Menu.png")} alt="Button" />
                    }
                </div>
                {
                    this.state.firstTime ? "" : (
                        this.state.navOpen ? (
                            <div className="overlay bg-pan-left gradient-hor">
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
