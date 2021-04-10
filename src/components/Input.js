import React from 'react'
import './Input.css'

export default function input() {
    return (
        <div className="container_input">
            <div className="title_label">
                <label htmlFor="monitoring-select" className="label_title">Subscription Name</label>
            </div>
            <div className="label_localisation">
                <select name="localisation" id="localisation-select">
                <option value="offer">--Simplon Aulnay--</option>
                <option value="localisation">Aulnay</option>
                <option value="localisation">Nantes</option>
                <option value="localisation">Marseille</option>
                <option value="localisation">Montreuil</option>
                <option value="localisation">Villetaneuse</option>
                <option value="localisation">Lille</option>
            </select>
            </div>
            <div className="label_offer">
                <select name="offer" id="offer-select">
                <option value="offer">--Subscription GUID--</option>
                <option value="offer">Azure VM</option>
                <option value="offer">Azure Storage</option>
                <option value="offer">App logic</option>
                <option value="offer">Postgresql</option>
                <option value="offer">App logic</option>
                <option value="offer">App logic</option>
            </select>
            </div>
            <div className="date">
            <input type="date" id="start" name="trip-start"
                value="11-04-2021"
                min="01-01-2021" max="10-04-2021">
            </input>
            </div>
            <div className="container_button">
                <button className="button">Submit</button>
            </div>
        </div>
    )
}
