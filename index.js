import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './App.css';






ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

/*export const CARD_SIZES = { width: 150, height: 250 };
export const DECK_SIZE = 15;

export const GAME_STATUS = {
  IN_PROGRESS: "IN_PROGRESS",
  CREATING: "CREATING",
  RESETTING: "RESETTING",
  FINISHED: "FINISHED"
};

export const CARD_STATUS = {
  SELECTED: "SELECTED",
  WIN: "WIN",
  LOSE: "LOSE"
};*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
