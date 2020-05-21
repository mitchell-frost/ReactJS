import React from 'react'
import ReactDOM from 'react-dom'
import { tsPropertySignature } from '@babel/types'

function Joke(props){
    return(
        <div>
            <h3 style={{display: !props.question && "none"}}>Question: {props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>Answer: {props.answer}</h3>
        </div>
    )
}

export default Joke