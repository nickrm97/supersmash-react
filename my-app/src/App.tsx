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

  // HELP: When to define return type of a function
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
    return this.state.data.map(x => <Card {...x}/>)
  }
  
  renderProfile(){
    if (this.state.currentCharacter){
      return (<Profile character={this.state.currentCharacter} />)
    }
  }

  render() {
    return (
      <div >
        <h1>This is a fun react/typescript app</h1>
        <div className="row">
          {this.renderCharacters()}
        </div>
        {this.renderProfile()}
        {/* <Profile
        name= "Bowser" image= "src/boswer.jpg" description= "Its me boswer! grrr" colour= "#FBD000" /> */}
      </div>
    );
  }
}

export default App;
