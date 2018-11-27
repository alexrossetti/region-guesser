/*
TODO
  - finish button when you reach the end; if you get to the end of the array it still 
    tries to loop through to the next item
  - maybe use .trim() instead of .replace() [only remove whitespace before and after 
    string, not in the middle as well]?
*/

import React, { Component } from 'react';
import './App.css';
import Name from './components/Name';
import Button from './components/Button';
import Score from './components/Score';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      names: [],
      index: 0,
      answer: "",
      score: 0
    };
  }

  componentDidMount(){
    const url = "https://uinames.com/api/?amount=100";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          names: data,
        });
      })
  }

  handleInput = (event) => {
    this.setState({
      answer: event.target.value 
    })
  }


  // when enter is clicked, check answer and update score/name
  handleKeyPress = (event) => {
    if (event.key === "Enter"){
      this.answer();
      this.incrementIndex();
    }
  }


  incrementIndex = () => {
    // don't allow the game to continue if no answer is inputted
    if (this.answer() === false){
      return false;
    };
    
    this.setState({
      index: this.state.index+1
    })
    
  }

  updateAnswer(text){
    this.setState({
      answer: text.target.value
    })
  }

  answer(){

    if (this.state.answer === ''){
      return false;
    }

    // put input and answer to lower case and strip of white space before comparing values
    let userAnswer = this.state.answer.toLowerCase().replace(/\s+/g, ''); 
    const currentIndex = this.state.index;
    const answer = this.state.names[currentIndex].region.toLowerCase().replace(/\s+/g, '');

    if (userAnswer === answer){
      this.setState({
        score: this.state.score+1
      })
    }

    this.setState({
      answer: ""
    })

    this.input.focus();
  }

  
  render() {

    let currentName = "";

    if (this.state.names.length >= 1){
      let currentIndex = this.state.index;
      currentName = this.state.names[currentIndex];
    }


    return (
      <div className="container">

        <div className="input">
          <input 
            className="input-field"
            ref = {(input) => {this.input = input}}
            type="text"
            placeholder="Enter nation..."
            value = {this.state.answer}
            onChange = {text => this.updateAnswer(text)}
            onKeyPress = {this.handleKeyPress}
          />
        </div>
        
        <Name 
          name = {currentName.name}
          surname = {currentName.surname}
          region = {currentName.region}
        />

        <Button 
          index = {this.state.index}
          updateIndex = {this.incrementIndex}
        />

        <Score 
          score = {this.state.score}
          attempts = {this.state.index}
        />

      </div>
    );
  }
}

export default App;