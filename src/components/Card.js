import React from "react"

export default function Card(props) {

    const shuffledAnswers = [props.correct, ...props.wrong].sort(() => Math.random() - 0.5)

    return (
        
        <div className="card--wrapper">
            <h1 className="card--question" dangerouslySetInnerHTML={{ __html: props.question}}/>
            <div className="card--answers">
                <button className="card--button" onClick={() => props.clickHandler(shuffledAnswers[0])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[0]}}/>
                <button className="card--button" onClick={() => props.clickHandler(shuffledAnswers[1])}
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[1]}}/>
                <button className="card--button" onClick={() => props.clickHandler(shuffledAnswers[2])}
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[2]}}/>
                <button className="card--button" onClick={() => props.clickHandler(shuffledAnswers[3])}
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[3]}}/>
            </div>
            <hr className="card--line"/>
        </div>
    )
}