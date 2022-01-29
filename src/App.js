import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"

export default function App() {

    const [intro, setIntro] = React.useState(false)

    return (
        <div className="quiz--wrapper">
            {intro && <Intro />}

            {!intro && 
            <div className="game--wrapper">
                <Card />
                <Card />,
                <Card />,
                <Card />,
                <button className="quiz--checkbutton">Check answers</button>
            </div>
            }
               
        </div>
    )
}