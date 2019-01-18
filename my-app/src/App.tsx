import React, { Component } from 'react';
import Card from './Card'
import Profile from './Profile'
import axios from 'axios';

export interface Character{
  id: number,
  name: string,
  image: string,
  colour: string,
  description: string
}

interface AppState{
  data: Character[],
  currentCharacter: Character
}

class App extends Component<{}, AppState> {

  state = {
    data: [],
    currentCharacter: ({id: 0, name: "", image: "", description: "", colour: ""})
  }  


  // HELP: When to define return type of a function with typescript ??
  componentDidMount():void{
    const URL = "http://localhost:3001/characters/";
    axios.get(URL).then(
      res => {
        const data = res.data;
        console.log(data);
        this.setState({data})
      }
    )
  }

  updateCharacter = (char: Character):void =>{
    console.log(char.id)
    // Find object by ID (replace name with char.name)
    // Also update this.state.data to work
  }

  renderCharacters(){
    return this.state.data.map((x, i) => <Card updateProfile={this.updateProfile} key={i} {...x}/>)
  }

  renderProfile(){
    if(this.state.currentCharacter.id != 0){
      return (<Profile updateCharacter={this.updateCharacter} character={this.state.currentCharacter} />)
    }
  }

  // Using an arrow function here to ensure we can reference this
  updateProfile = (id: number) =>{
    const URL = "http://localhost:3001/characters/";
    axios.get(URL + id + "/").then(
      res => {
        this.setState({currentCharacter: res.data});
      }
    )
  }

  render() {
    return (
      <div>
        <h1>SuperSmashBros Characters :)</h1>
        <div className="row">
          {this.renderCharacters()}
        </div>
        {this.renderProfile()}
      </div>
    );
  }
}

export default App;
