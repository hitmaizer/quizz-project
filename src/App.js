import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"
import { nanoid } from 'nanoid'

export default function App() {
    const [quizData, setQuizData] = React.useState([])
    const [questions, setQuestions] = React.useState([])
    // const [userAnswers, setUserAnswers] = React.useState([])
    let answersArr = []

    

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
                
                // newQuestions.push(randomQuestion)
                newQuestions.push({...randomQuestion, isSelected: false, id: nanoid(), userInput: ""})
                
                
            }
        
        setQuestions(newQuestions)
        
    }

    function toggleIntro() {
        setIntro(!intro)
        getRandomQuestions()
    }
    
    console.log(questions)

    function selectAnswer(id, answer) {
        setQuestions(oldQuestions => oldQuestions.map(question => {
            return question.id === id ? {...question, userInput: answer, isSelected: !question.isSelected}:
            question
        }))
        
    }

   

    function checkAnswers(id, correct) { 

        if (id == correct) {
            console.log("correct!")
        }
        console.log(`you selected ${id}`)
    }


    const cardElements = questions.map(question => 
    <Card 
        key={nanoid()}
        question={question.question}
        correct={question.correct_answer}
        wrong={question.incorrect_answers}
        clickHandler={selectAnswer}
        id={question.id}
        selected={question.isSelected}
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