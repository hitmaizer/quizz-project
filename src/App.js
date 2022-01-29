import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"

export default function App() {
    const [quizData, setQuizData] = React.useState([])
    const [questions, setQuestions] = React.useState([
        {
            category: "",
            type: "",
            difficulty: "",
            question: "",
            correct_answer: "",
            incorrect_answers: [
            "",
            "",
            ""
            ]
        }
    ])

    const [intro, setIntro] = React.useState(true)
    
    

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=40")
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

    const cardElements = questions.map(question => 
    <Card 
       question={question.question} 
       
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