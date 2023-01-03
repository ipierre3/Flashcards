import React, { useState } from 'react';
// import Card from '../Card/Card';
import './CardViewer.css';


const CardViewer = (props) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  // useEffect((props) => {
  //   setWord(props.card.word)
  // }, []);

  function handleSubmit(event){
    event.preventDefault();
    
    let newCard = {
        word: word,
        definition: definition
    }
    props.createNewCard(newCard);
    // props.

    setWord("");
    setDefinition("");
}
  return ( 
    <div>
      <form onSubmit={handleSubmit} className='form-spacing'>
        <div className='form-row'>
          <div>
            <input type='text' placeholder='Enter title...' value={word} onChange={(event) => setWord(event.target.value)} data-cy='word-input'></input>
          </div>
          <div>
            <input type='text' placeholder='Enter definition' value={definition} onChange={(event) => setDefinition(event.target.value)} data-cy='definition-input'></input>
          </div>
        </div>
        <div className="form-row">
          <button type='submit' data-cy='Save-button'>Save</button>
        </div>
      </form>
    </div>
   );
}
 
export default CardViewer;