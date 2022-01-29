import React from "react"

export default function Card(props) {
    return (
        <div className="card--wrapper">
            <h1 className="card--question">How would one say goodbye in Spanish?</h1>
            <div className="card--answers">
                <button className="card--button">Adiós</button>
                <button className="card--button">Hola</button>
                <button className="card--button">Au Revoir</button>
                <button className="card--button">Salir</button>
            </div>
            <hr className="card--line"/>
        </div>
    )
}