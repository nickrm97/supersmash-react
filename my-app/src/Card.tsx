import React, { Component } from 'react';

interface CardProps{
  id: number,
  name: string,
  image: string,
  colour: string,
  updateProfile(id: number): void
}

class Character extends Component<CardProps, {}> {

    // NOTE: Arrow function means we don't need to bind this
    handleClick = ()=>{
        this.props.updateProfile(this.props.id)
    }

    render(){
        return(
                <div onClick={this.handleClick} className="card" style={{width: "150px",marginBottom:"20px", background: this.props.colour}}>
                    <img className="card-img-top" src={this.props.image} />
                    <div className="card-body">
                        <h4 className="card-title text-center">{this.props.name}</h4>
                    </div>
                </div>
        )
    }
}

export default Character;