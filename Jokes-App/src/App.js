import React from 'react';
import './App.css';
import Footer from './Footer'
import Joke from './Joke';
import Header from './Header';
import jokesdata from './jokesdata';
import { func } from 'prop-types';

function App() {
  const jokeComponents = jokesdata.map( joke => < Joke key={joke.id} question={joke.question} answer={joke.answer} /> )
  return (
    <div>     
      <Header />
      {jokeComponents}
      <Footer />
    </div> 
  )
}

export default App;
