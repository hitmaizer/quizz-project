import React from "react"
import Intro from "./components/Intro"
import Card from "./components/Card"
import { nanoid } from 'nanoid'
import Confetti from 'react-confetti'

export default function App() {
    const [quizData, setQuizData] = React.useState([])
    const [questions, setQuestions] = React.useState([])
    
    const [intro, setIntro] = React.useState(0)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=50&type=multiple")
            .then(res => res.json())
            .then(data => setQuizData(data.results))
        
            
            

    }, [])

    function shuffle(oldAnswers) {
        let array = oldAnswers
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    function getRandomQuestions() {

        const newQuestions = []
            for (let i = 0; i < 4; i++) {
                const randomNumber = Math.floor(Math.random() * quizData.length)
                const randomQuestion = quizData[randomNumber]
                
                // newQuestions.push(randomQuestion)
                newQuestions.push({...randomQuestion, allAnswers: shuffle([...randomQuestion.incorrect_answers, randomQuestion.correct_answer]), id: nanoid(), userInput: ""})
                
            }
        
        setQuestions(newQuestions)    
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
            return question.id === id ? {...question, userInput: answer}:
            question
        }))   
    }
    
    function checkAnswers() { 
        // criar uma variante de resultado
        let result = 0
        // percorrer o array das questions 
        for (let question of questions) {
            // verificar quantas vezes o userInput === correct_answer
            if (question.userInput === question.correct_answer) {
                // adicionar 1 por cada vez que truth
                result++
            }
        }
        return result    
    }

    
    function checkResult() {
        setIntro(2)
    }

    const cardElements = questions.map(question => 
    <Card 
        key={nanoid()}
        question={question.question}
        correct={question.correct_answer}
        clickHandler={selectAnswer}
        id={question.id}
        userInput={question.userInput}
        allAnswers={question.allAnswers}
        intro={intro}    
    />)
    
    //console.log(questions)

    return (
        <div className="quiz--wrapper">
            {intro === 0 && 
            <Intro 
                clickHandler={toggleIntro}
            />}

            {intro === 1 && 
                <div className="quiz--wrapper">
                    {cardElements}
                    <button className="quiz--checkbutton" onClick={() => checkResult()}>Check answers</button>
                </div>
            }
            
            {intro === 2 &&
                <div className="quiz--wrapper">
                    <Confetti />
                    {cardElements}
                    <h1 className="intro--title">You scored {checkAnswers()}/4!</h1>
                    <button className="quiz--checkbutton" onClick={newGame}> Play again!</button>
                </div>
            }
            

        </div>
    )
}

// check results --
// shuffle the possible answers
// style after results -- 
