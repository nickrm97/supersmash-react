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


  // HELP: When to define return type of a function ??
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

  renderCharacters(){
    return this.state.data.map((x, i) => <Card updateProfile={this.updateProfile} key={i} {...x}/>)
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
      <div >
        <h1>SuperSmashBros Characters :)</h1>
        <div className="row">
          {this.renderCharacters()}
        </div>
        <Profile character={this.state.currentCharacter} />
      </div>
    );
  }
}

export default App;
