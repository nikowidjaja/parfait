import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p>Parfait 2020</p>
                <div className="footer__image">
                    <img src={require("../assets/images/Behance Logo.svg")} alt="behance" />
                    <img src={require("../assets/images/Instgaram Logo.svg")} alt="instagram" />
                </div>
            </div>
        )
    }
}
