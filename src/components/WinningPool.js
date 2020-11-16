import React, { useState, useEffect, useRef} from 'react';
import  '../App.css' ;
import {HandleClick} from './Constants';



export default function WinningPool(CARD_VALUE,setGameState){
    const defBalance=1000;
    const[newWinningPool,SetNewWinningPool]=useState(0);
    var newBalance;

    if(setGameState==HandleClick.NEW_GAME){
        newBalance=defBalance-100;
        SetNewWinningPool= 0;
    }
    else if(setGameState==HandleClick.FORFEIT){
        newBalance=defBalance+ newWinningPool;
        SetNewWinningPool= 0;
    }
    else if(setGameState==HandleClick.CONTINUE){
        newBalance=defBalance;
        SetNewWinningPool= newWinningPool+CARD_VALUE;
    }
    return(
        <div className="Winning-Pool">
            Current Balance:{newBalance}
            <br></br>
            Current Winning Pool:{newWinningPool}
            
        </div>
        
    )
  };






