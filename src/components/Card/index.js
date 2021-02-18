import React from 'react';

import './styles.css';

class Card extends React.Component{

  render(){
    return (
      <div className="card">
        <div className="card-title">
            <h3>{this.props.title}</h3>
            <button className="card-button">Ver</button>
        </div>
        <div className="card-info">
          <img src={this.props.iconImg} alt={this.props.iconAlt}/>
          <p>{this.props.description}</p>
        </div>
      </div>
    )
  }

}

export default Card;