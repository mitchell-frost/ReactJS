import React from 'react';
import logo from './logo.svg';
import './App.css';

function MyInfo() {
  return (
    <div class="bhawna">
      <h1>My Info</h1>
      <h2>This is a hello from Bhawna Patnaik</h2>
      <h3>My favourite vacation destination are as follows:</h3>
      <h3>
        <div class="row">
          <div class="column">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div class="column">
          <ol className="vacation">
            <li>Venice</li>
            <li>Gangtok</li>
            <li>Washington DC</li>
          </ol>
          </div>
        </div>
      </h3>
    </div>
  );
}

export default MyInfo;
