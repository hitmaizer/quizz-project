import React from "react"
import { nanoid } from "nanoid"


export default function Card(props) {
    // let shuffledAnswers = [props.correct, ...props.wrong]
    
    React.useEffect(() => {
        // let shuffledAnswers = [props.correct, ...props.wrong].sort(() => Math.random() - 0.5)
        
    },[])

    
    
    
    const answerStyles = {
        firstUnchecked: {
            cursor: "pointer"
        },
        firstChecked: {
            border: "none",
            backgroundColor: "#D6DBF5",
            cursor: "pointer"
        },
        secondCorrect: {
            border: "none",
            backgroundColor: "#94D7A2",
            outline: "none"

        },
        secondUncorrect: {
            border: "none",
            backgroundColor: "#F8BCBC",
            opacity: "0.5",
            outline: "none"
            
        },
        secondUnchecked: {
            opacity: "0.5",
            outline: "none"
            
        }
    } 
    
    
    
    const answerElements = props.allAnswers.map(item => {
        let obj = {}
        
        if (props.intro === 1) {
            obj = (item === props.userInput) ? 
            {
                style: {...answerStyles.firstChecked},
                onClick: () => {props.clickHandler(props.id, item)}
            } :
            {
                style: {...answerStyles.firstUnchecked},
                onClick: () => {props.clickHandler(props.id, item)}
            }
        }
        return (<button 
            key={item} 
            className="card--button" 
            dangerouslySetInnerHTML={ {__html: item} } 
            {...obj} 
        />)

    })

    

    return (
        
        <div className="card--wrapper">
            <h1 className="card--question" dangerouslySetInnerHTML={{ __html: props.question}}/>
            <div className="card--answers">
                {answerElements}
                
                {/* <button className="card--button" onClick={() => props.clickHandler(props.id, shuffledAnswers[0], buttons)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[0]}}/>
                <button className="card--button" onClick={() => props.clickHandler(props.id, shuffledAnswers[1], buttons)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[1]}}/>
                <button className="card--button" onClick={() => props.clickHandler(props.id, shuffledAnswers[2], buttons)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[2]}}/>
                <button className="card--button" onClick={() => props.clickHandler(props.id, shuffledAnswers[3], buttons)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[3]}}/> */} 
                
            </div>
            <hr className="card--line"/>
        </div>
    )
}