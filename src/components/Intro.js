import React from "react"

export default function Intro(props) {
    return (
    <div className="intro--wrapper">
        <h1 className="intro--title">Quizzical</h1>
        <p className="intro--description">Some description if needed</p>
        <button 
            onClick={props.clickHandler} 
            className="intro--button">
            Start Quiz
        </button>
    </div>
    )
}