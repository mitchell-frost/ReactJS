import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(condition) {
    this.setState(prevState => {
      if(condition == 1){
        return {
          count: prevState.count + 1
        }
      }
      else if(condition == 2){
        return {
          count: prevState.count + 2
        }
      } 
      else if(condition == 3){
        return {
          count: prevState.count - 1
        }
      } 
      else if(condition == 4){
        return {
          count: prevState.count - 2
        }
      }        
    })
  }

  render() {
    return (
      <div className="main-content">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.handleClick(1)}>Increment by 1!</button><br /><br />
        <button onClick={() => this.handleClick(2)}>Increment by 2!</button><br /><br />
        <button onClick={() => this.handleClick(3)}>Decrement by 1!</button><br /><br />
        <button onClick={() => this.handleClick(4)}>Decrement by 2!</button><br /><br />
      </div>
    )
  }
}

export default App
