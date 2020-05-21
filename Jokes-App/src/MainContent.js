import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

function MainContent(props) {
    return (
        <div>
          <h2>Question: {props.question}</h2>
          <h2>Answer: {props.answer}</h2>
        </div>
    )
}

export default MainContent;