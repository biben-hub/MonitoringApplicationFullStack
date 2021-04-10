import React from 'react'
import './Header.css'
import logo from './img/logo.png'

export default function header() {
    return (
        <div className="header_container">
                <div className="logo">
                    <img src={logo} alt="logo">
                    </img>
                </div>
                <div className="title_header">
                    <h1>Azure Credit Consommation</h1>
                </div>
        </div>
    )
}
