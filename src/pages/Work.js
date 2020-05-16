import React, { Component } from 'react'
import Navbar from '../partial/Navbar'
import Footer from '../partial/Footer'

const items = [
    {
        id: 1,
        logo_url: "NFHI Logo.jpg",
        bg_url: "NFHI.jpg",
        arrow_color: "white"
    },
    {
        id: 2,
        logo_url: "Univ Logo.svg",
        bg_url: "Univ.png",
        arrow_color: "black"
    },
    {
        id: 3,
        logo_url: "stac-logo.png",
        bg_url: "Stac.png",
        arrow_color: "black"
    },
    {
        id: 4,
        logo_url: "Fix Serem Logo.png",
        bg_url: "Fix Serem.png",
        arrow_color: "white"
    },
    {
        id: 5,
        logo_url: "What about your project@2x.png",
        bg_url: "Work gradient.jpg",
        arrow_color: "black"
    },
]

export default class Work extends Component {

    renderItems() {
        return items.map((data, index) => {
            return (
                <div key={index} className="work-flex__item" >
                    <img src={require(`../assets/images/${data.bg_url}`)} alt="/" />
                    <div className={`work-flex__description ${data.id === 5 ? "bigger" : ""}`}>
                        <img src={require(`../assets/images/${data.logo_url}`)} alt="/" />
                        {data.arrow_color === "black" ? <img src={require("../assets/images/Black Arrow.svg")} alt="/" /> : <img src={require("../assets/images/White Arrow.svg")} alt="/" />}
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="work">
                    <h2>Our 2020 selected works</h2>
                    <div className="work-flex">
                        {this.renderItems()}
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
