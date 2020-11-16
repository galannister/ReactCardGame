import React, { useState } from "react";
import '../App.css';
import { useForm } from "react-hook-form";
import Button from "react-bootstrap/Button";
import {BrowserRouter as Routing, Switch, Route, Link, Router} from 'react-router-dom';


function Startpage() {
    const [nickname, setNickname] = useState("");
    const {register, handleSubmit, errors} =useForm();





  return (
    <div class="Nickname">
      <h1> RISK IT </h1>
      <form onSubmit={handleSubmit}>
        Insert a Nickname<input name="nickname" onInput={e => setNickname(e.target.value)} placeholder="nickname" ref={register({required: true, minLength:1})}/>
        {errors.nickname && 'Nickname at least 1 character'}
        
       </form>
      
        <Button block size="lg" type="HowToPlay" ><Link to={'/HowtoPlay'} >  How to play?  </Link> 
        
        </Button>
        <Button block size="lg" type="GetStarted" onClick={()=>nickname}><Link to={'/Game'} > Get Started  </Link>
         
        </Button>
  
    </div>
  );

}

export default Startpage ;

