import React from "react"
import Intro from "./components/Intro"

export default function App() {

    const [intro, setIntro] = React.useState(true)

    return (
        <div className="quiz--wrapper">
            {intro && <Intro />}
        </div>
    )
}