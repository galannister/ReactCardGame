import { CARD_STATUS, DECK_SIZE, CARD_SIZES } from "./index";
const round=1;
/**
 * Create new game
 */
const gameService = () => {

  
    while (deck.length > DECK_SIZE) {
      deck.pop();
    }
  
    const shuffledDeck = deck.sort(() => 0.5 - Math.random());
  
    return shuffledDeck;
  };


// produce new cards
export const getRandomCards= () => {
    
}
  /**
 * Check if the game is completed
 * @param {Array} deck
 */
export const checkGame = (deck) => {


}
  
  export default gameService;