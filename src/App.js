import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"
import { nanoid } from 'nanoid'

export default function App() {
    const [quizData, setQuizData] = React.useState([])
    const [questions, setQuestions] = React.useState([])
    const [isActive, setActive] = React.useState(false)
    const [intro, setIntro] = React.useState(0)

    
    

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
                newQuestions.push({...randomQuestion, allAnswers: [...randomQuestion.incorrect_answers, randomQuestion.correct_answer], questionLabel: randomQuestion.question, isSelected: false, id: nanoid(), userInput: ""})
                
            }
        
        setQuestions(newQuestions)
         
        
        
    }

    const toggleClass = () => {
        setActive(!isActive)
        
    }
    

    function toggleIntro() {
        setIntro(1)
        getRandomQuestions()
    }

    function newGame() {
        setIntro(0)
    }
    
    

    function selectAnswer(id, answer) {
       
        setQuestions(oldQuestions => oldQuestions.map(question => {
            return question.id === id ? {...question, userInput: answer, isSelected: !question.isSelected}:
            question
        }))   
    }
    
    
    function checkAnswers() { 
        // criar um novo de array de resultados
        // percorrer o array das questions 
        // verificar quantas vezes o userInput === correct_answer
        // 
        
        setIntro(2)
        /* if (id == correct) {
            console.log("correct!")
        }
        console.log(`you selected ${id}`) */
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
        userInput={question.userInput}
        allAnswers={question.allAnswers}
        intro={intro}
        
        
        
    />)
    
    console.log(questions)

    return (
        <div className="quiz--wrapper">
            {intro === 0 && 
            <Intro 
                clickHandler={toggleIntro}
            />}

            {intro === 1 && 
                <div className="quiz--wrapper">
                    {cardElements}
                    <button className="quiz--checkbutton" onClick={checkAnswers}>Check answers</button>
                </div>
            }
            
            {intro === 2 &&
                <div>
                    <h1>You scored x amount</h1>
                    <button className="quiz--checkbutton" onClick={newGame}> Playagain!</button>
                </div>
            }
            

        </div>
    )
}