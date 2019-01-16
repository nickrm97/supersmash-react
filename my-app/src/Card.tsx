import React, { Component } from 'react';
import { string } from 'prop-types';

interface CardProps{
  name: string
}


class Card extends Component<CardProps, {}> {
    render(){
        return(
                <div className="card" style={{width: "150px",marginBottom:"20px"}}>
                    <img className="card-img-top" src="https://via.placeholder.com/150" />
                <div className="card-body">
                    <h4 className="card-title text-center">{this.props.name}</h4>
                </div>
                </div>
        )
    }
}

export default Card