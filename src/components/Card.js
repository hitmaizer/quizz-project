import React from "react"

export default function Card(props) {
    let shuffledAnswers = [props.correct, ...props.wrong]
    
    
    
    React.useState(() => {
        let shuffledAnswers = [props.correct, ...props.wrong].sort(() => Math.random() - 0.5)
        
    },[])

    
    
    const styles = {
        backgroundColor: props.selected ? "#D6DBF5" : "#ffff"
    }

    return (
        
        <div className="card--wrapper">
            <h1 className="card--question" dangerouslySetInnerHTML={{ __html: props.question}}/>
            <div className="card--answers">
                <button className="card--button" style={styles} onClick={() => props.clickHandler(shuffledAnswers[0], props.correct)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[0]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(shuffledAnswers[1], props.correct)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[1]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(shuffledAnswers[2], props.correct)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[2]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(shuffledAnswers[3], props.correct)} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[3]}}/>
                
            </div>
            <hr className="card--line"/>
        </div>
    )
}