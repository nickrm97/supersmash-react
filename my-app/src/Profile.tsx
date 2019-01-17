import React, { Component } from 'react';
import {Character} from './App';
import styles from './Image.module.css'

interface ProfileProps{
    character: Character 
}

class Profile extends Component<ProfileProps>{
    render(){
        const {character: {name, image, description, colour}} = this.props
        return(
            <div className="card" style={{background: colour}}>
                    <img className={styles.large} src={image}/>
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p>{description}</p>
                </div>
            </div>
        )
    }
}

export default Profile;