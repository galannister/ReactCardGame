import '../App.css'
import {Link} from 'react-router-dom';
import React, {useState} from 'react';
import CardDeck from './CardDeck';
import Button from "react-bootstrap/Button";
import {HandleClick} from './Constants';
import WinningPool from './WinningPool';






export function gameState(HandleClick){
    const setGameState=HandleClick.NEW_GAME;
    if(gameState==HandleClick.EXIT_GAME){
        return setGameState=gameState;
    }
    else if(gameState==HandleClick.FORFEIT){
        return setGameState=gameState;
    }
    else if(gameState==HandleClick.CONTINUE){
        return setGameState=gameState;
    }
    return setGameState;
  };
  


function Game(){
    const[cards, setCards]= useState(SAMPLE_CARDS);// default value of our state
    var balance= 1000;
    var winningPool=0;
    
        return(
         <div className="header" >  
         <h1>RISK IT</h1>
            <div className="container" >
                
                <CardDeck cards= {cards} key={cards.id}  onClick={()=>gameState(HandleClick.CONTINUE)}  />
                
                <WinningPool winningPool={WinningPool(SAMPLE_CARDS.value,gameState)}/>
               
                
                
                <Button block size="lg" type="Forfeit" onClick={()=>gameState(HandleClick.FORFEIT)}>  Forfeit   
                </Button>
                <Button block size="lg" type="ExitGame" onClick={()=>gameState(HandleClick.EXIT_GAME)}><Link to={'/'} > Exit Game  </Link>
                </Button>
               
                
            </div>
         </div>    
        
        );
    
}
    

//<WinningPool winningPool={WinningPool(SAMPLE_CARDS.value,gameState)}/>



const SAMPLE_CARDS= [ 
    {
      cover: "RISK IT ",
      id: 1,
      value: Math.floor(Math.random()*(4000-50))+50,
      status: "WIN"
    },
    {
      cover: "RISK IT ",
      id: 2,
      value: Math.floor(Math.random()*(4000-50))+50,
      status: "WIN"
    },
    {
      cover: "RISK IT ",
      id: 3,
      value: Math.floor(Math.random()*(4000-50))+50,
      status: "LOSS"
    },
    {
      cover: "RISK IT ",
      id: 4,
      value: Math.floor(Math.random()*(4000-50))+50,
      status: "WIN"
    }
  ]



export default Game;