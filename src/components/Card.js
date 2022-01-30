import React from "react"
import { nanoid } from "nanoid"


export default function Card(props) {
    let shuffledAnswers = [props.correct, ...props.wrong]
    const [isActive, setActive] = React.useState(false)
    React.useEffect(() => {
        let shuffledAnswers = [props.correct, ...props.wrong].sort(() => Math.random() - 0.5)
        
    },[])

    const toggleClass = () => {
        setActive(!isActive)
    }

    /* function setAnswers() {
        const newArr = []
        newArr.push(shuffledAnswers.map(item => {
            return {...item, id: nanoid()}
        }))
        setAnswerElements(newArr)
    } */
    
    /* const answerElements = shuffledAnswers.map(item => 
    <button className="card--button" 
        key={nanoid()}
        id={nanoid()}
        dangerouslySetInnerHTML={{ __html: item}}
        
    />) */

    // console.log(answerElements)

    
    const styles = { backgroundColor: props.selected ? "#D6DBF5" : "#fff"}
    
    return (
        
        <div className="card--wrapper">
            <h1 className="card--question" dangerouslySetInnerHTML={{ __html: props.question}}/>
            <div className="card--answers">
                
                {/* {answerElements} */}
                <button className={isActive ? "active card--button" : "card--button"} onClick={toggleClass} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[0]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[1])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[1]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[2])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[2]}}/>
                <button className="card--button" style={styles} onClick={() => props.clickHandler(props.id, shuffledAnswers[3])} 
                dangerouslySetInnerHTML={{ __html: shuffledAnswers[3]}}/> 
                
            </div>
            <hr className="card--line" onClick={() => props.clickHandler(props.id, shuffledAnswers)}/>
        </div>
    )
}