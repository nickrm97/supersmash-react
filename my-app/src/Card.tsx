import React, { Component } from 'react';

interface CardProps{
  name: string,
  image: string
}

class Character extends Component<CardProps, {}> {
    render(){
        return(
                <div className="card" style={{width: "150px",marginBottom:"20px"}}>
                    <img className="card-img-top" src={this.props.image} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{this.props.name}</h4>
                    </div>
                </div>
        )
    }
}

export default Character;