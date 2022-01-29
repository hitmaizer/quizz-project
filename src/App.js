import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"

export default function App() {
    const [quizData, setQuizData] = React.useState({})
    const [intro, setIntro] = React.useState(true)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=40")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [])

    

    function toggleIntro() {
        setIntro(false)
        
    }

    console.log(quizData)

    return (
        <div className="quiz--wrapper">
            {intro && 
            
            <Intro 
                clickHandler={toggleIntro}
            />}

            {!intro && 
            <div className="quiz--wrapper">
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