import React, { useState } from 'react';

export default function GetQuestion(props) {

    const [hide, setHide] = useState(false)

    return(
        <div className="getquestion">

            <h2 className="play">Let's Play!</h2>
            <button className="questions" onClick={() => props.getAnswer()} >Get Question</button>
            <div className="catBox2" className="quest">Category: {props.question.category.title}</div>{console.log(props.question)}
            <h2 className="point"> Points: {props.question.value}</h2>

            <h2 className="answers" className="answer">Answer: {props.question.quesion}</h2>

            <button className="button" onClick={() => setHide(!hide)}>Click To Reveal Question</button>
            <div className="reveal"> {hide ? <p>Answer: {props.question.answer}</p>: null} </div>

        </div>
    )
}

