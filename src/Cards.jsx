import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export  default function Cards (props){

    return (

        <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{props.card.title}</h5>
                    <p className="card-text">{props.card.description}</p>
                    <p className="card-text">Priority:{props.card.priority}</p>
                </div>
                <div className="card-footer">
                    <button className="btn-primary">Move</button>
                </div>
        </div>

    )
};