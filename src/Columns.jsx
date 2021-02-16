import React from 'react';
import Cards from "./Cards";

export default function Columns (props){
    return (
        <div className='col-sm' style={{boarder: '1px solid'}}>

            <h4>{props.columns.title}</h4>

            {props.cards.filter(el => el.status === props.columns.status)
                .sort((a, b) => b.priority - a.priority)
                .map(el =>
                <Cards
                    key={el.id}
                    card={el}/>)}

        </div>

    )
};