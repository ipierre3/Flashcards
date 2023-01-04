import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardViewer.css';


const CardViewer = (props) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('')
  
  
  ;

  function handleSubmit(event){
    event.preventDefault();
    
    let newCard = {
        word: word,
        definition: definition
    }
    props.createNewCard(newCard);

    setWord("");
    setDefinition("");
  }
  
  return ( 
    <div className='card-viewer-container'>
      <div onSubmit={handleSubmit}>
        <button className = "add-card-button" type = "submit"> Add Card </button>
      </div>
      {props.cards.length > 0 &&
        <Card frontSide={props.cards[0].word} backSide={props.cards[0].definition} editCard={props.editCard} deleteCard = {props.deleteCard} />
      }
        
    </div>
   );
}
 
export default CardViewer;

      // <Card question = 'question' definition='definition' editCard={props.editCard} deleteCard = {props.deleteCard} />
      // <button className = "prevBtn" type = "submit"> PREV </button>
      // <button className = "nextBtn" type = "submit"> NEXT </button>

          /* <div>
        <form onSubmit={handleSubmit} className='form-spacing'>
          <div className='form-row'>
            <div>
              <input type='text' placeholder='Enter title...' value={word} onChange={(event) => setWord(event.target.value)}></input>
            </div>
            <div>
              <input type='text' placeholder='Enter definition' value={definition} onChange={(event) => setDefinition(event.target.value)}></input>
            </div>
            
          </div>
          <div className="form-row">
            <button type='submit'>Save</button>
          </div>
        </form>
      </div> */