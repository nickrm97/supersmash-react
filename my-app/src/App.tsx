import React, { Component } from 'react';
import Card from './Card'
import Profile from './Profile'

class App extends Component {
  render() {
    return (
      <div >
        <h1>This is a fun react/typescript app</h1>
        <div className="row">
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
          <Card name="mario"/>
        </div>
        <Profile name="mario" image="src/imge.jpg" description="it's me mario lol" />
      </div>
    );
  }
}

export default App;
