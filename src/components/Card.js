import React from "react"

export default function Card(props) {

    return (
        
        <div className="card--wrapper">
            <h1 className="card--question">{props.question}</h1>
            <div className="card--answers">
                <button className="card--button">{props.correct}</button>
                <button className="card--button">{props.wrong[2]}</button>
                <button className="card--button">{props.wrong[0]}</button>
                <button className="card--button">{props.wrong[1]}</button>
            </div>
            <hr className="card--line"/>
        </div>
    )
}