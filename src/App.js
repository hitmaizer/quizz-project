import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"
import { nanoid } from 'nanoid'

export default function App() {
    const [quizData, setQuizData] = React.useState([])
    const [questions, setQuestions] = React.useState([])
    const [userAnswers, setUserAnswers] = React.useState([])

    const [intro, setIntro] = React.useState(true)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=50&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results))

    }, [])

    function getRandomQuestions() {
        const newQuestions = []
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * quizData.length)
                const randomQuestion = quizData[randomNumber]
                newQuestions.push(randomQuestion)
            }
        
        setQuestions(newQuestions)
        
    }

    function toggleIntro() {
        setIntro(!intro)
        getRandomQuestions()
    }
    
    console.log(questions)

    function selectHandler(id) {
        
        console.log(`you selected ${id}`)
    }

    const cardElements = questions.map(question => 
    <Card 
        key={nanoid()}
        question={question.question}
        wrong={question.incorrect_answers} 
        correct={question.correct_answer}
        clickHandler={selectHandler}
    />)
    
        
    

    return (
        <div className="quiz--wrapper">
            {intro && 
            <Intro 
                clickHandler={toggleIntro}
            />}

            {!intro && 
                <div className="quiz--wrapper">
                    {cardElements}
                    <button className="quiz--checkbutton">Check answers</button>
                </div>
            }
            

        </div>
    )
}