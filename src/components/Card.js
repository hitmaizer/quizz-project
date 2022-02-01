import React from "react"



export default function Card(props) {
    const shuffledAnswers = [...props.allAnswers]


    
    
    
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
    
    
    
    const answerElements = shuffledAnswers.map(item => {
        let obj = {}
        
        if (props.intro === 1) {
            obj = (item === props.userInput) 
            ? {
                style: {...answerStyles.firstChecked},
                onClick: () => {props.clickHandler(props.id, item)}
            } 
            :{
                style: {...answerStyles.firstUnchecked},
                onClick: () => {props.clickHandler(props.id, item)}
            }
        } else if (props.intro === 2) {
            if (item === props.correct){
                obj = {
                    style: {...answerStyles.secondCorrect}
                }
            } else if (item === props.userInput) {
                obj = {
                    style: {...answerStyles.secondUncorrect}
                }
            } else {
                obj = {
                    style: {...answerStyles.secondUnchecked}
                }
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
            </div>
            <hr className="card--line"/>
        </div>
    )
}