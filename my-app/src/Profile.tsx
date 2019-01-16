import React, { Component } from 'react';

interface ProfileProps{
    name: string,
    description: string,
    image: string
}

class Profile extends Component<ProfileProps>{
    render(){
        return(
            <div className="card">
                    <img className="card-img-top" src={this.props.image}/>
                <div className="card-body">
                    <h4 className="card-title">{this.props.name}</h4>
                    <p>{this.props.description}</p>
                </div>
            </div>
        )
    }
}

export default Profile;