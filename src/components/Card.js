import React from "react"
import { nanoid } from 'nanoid'

export default function Card(props) {
    let shuffledAnswers = [props.correct, ...props.wrong]
    
    
    
    React.useState(() => {
        let shuffledAnswers = [props.correct, ...props.wrong].sort(() => Math.random() - 0.5)
        
    },[])

    
    const styles = {
        backgroundColor: props.selected ? "#D6DBF5" : "#fff"
    }

    console.log(props.id)

    return (
        
        <div className="card--wrapper">
            <h1 className="card--question" dangerouslySetInnerHTML={{ __html: props.question}}/>
            <div className="card--answers">
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[0])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[0]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[1])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[1]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[2])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[2]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[3])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[3]}}/>
                
            </div>
            <hr className="card--line"/>
        </div>
    )
}