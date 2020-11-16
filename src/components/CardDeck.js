import React, { Component } from 'react'
import Cards from './Cards';
import '../App.css' ;



export default function CardDeck({cards}) {
    
        return (
            <div className="card-grid">
                {cards.map(card =>{
                    return <Cards card={card} key={card.id}/>
                })}
            </div>
        );
}

