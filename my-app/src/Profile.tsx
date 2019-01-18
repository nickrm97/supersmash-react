import React, { Component } from 'react';
import {Character} from './App';
import UpdateForm from './UpdateForm';
import styles from './Image.module.css'
import { number } from 'prop-types';

interface ProfileProps{
    character: Character,
    updateCharacter(char: Character):void
}

class Profile extends Component<ProfileProps>{

    updateCharacter = (update: string) =>{
        this.props.character.name = update;
        this.props.updateCharacter(this.props.character);
    }   

    render(){
        const {character: {name, image, description, colour}} = this.props
        return(
            <div className="card" style={{background: colour}}>
                    <img className={styles.large} src={image}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p>{description}</p>
                    <UpdateForm name={this.props.character.name} updateCharacter={this.updateCharacter} />
                </div>
            </div>
        )
    }
}

export default Profile;