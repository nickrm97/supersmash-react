import React, { Component } from 'react';
import Character from './App';

interface ProfileProps{
    character: Character
}

class Profile extends Component<ProfileProps>{

    componentDidMount(){
        console.log(this.props.character)
    }
    render(){
        return(
            <div className="card">
                    <img className="card-img-top"/>
                <div className="card-body">
                    <h4 className="card-title"></h4>
                    <p></p>
                </div>
            </div>
        )
    }
}

export default Profile;