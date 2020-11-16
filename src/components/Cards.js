import React, { useState, useEffect, useRef} from 'react';
import  '../App.css' ;




export default function Cards({card}){
    const[flip, setFlip]= useState(false)
       

    return (
        <div className={`card ${flip ? 'flip' : ''}`}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" >
                {card.cover}           
            </div>

            <div className="back" >
                {card.value} <br></br>
                {card.status}
            </div>
        </div>

    );
}


