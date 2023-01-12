import React, { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm'
import Card from '../Card/Card';
import './CardViewer.css';


const CardViewer = (props) => {
  const [index, setIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  
  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index < props.cards.length - 1) {
      setIndex(index + 1);
    }
  }
  
  return ( 
    <div className='card-viewer-container'>
      <div>
        <button onClick={() => setShowModal(true)} className = "add-card-button-modal" type = "submit"> Add Card </button>
      </div>
      <div>
      {showModal && <ModalForm selectedCollectionId = {props.selectedCollectionId} createNewCard = {props.createNewCard} showModal = {showModal} setShowModal = {setShowModal} />}
      </div>

      {props.cards.length > 0 &&
        <Card frontSide={props.cards[index].word} backSide={props.cards[index].definition} editCard={props.editCard} deleteCard = {props.deleteCard} activeCard = {props.activeCard} setActiveCard = {props.setActiveCard} cards = {props.cards} />
      }
      <button onClick={() =>handlePrev()} className = "prevBtn" type = "submit"> Prev </button>
      <button onClick={handleNext} className = "nextBtn" type = "submit"> Next </button>
    </div>
   );
}
 
export default CardViewer;

  // function handleClick(event){
  //   setShowModal(true);
  //   event.preventDefault();
    
  //   let newCard = {
  //       word: word,
  //       definition: definition
  //   }
  //   props.createNewCard(newCard);

  //   setWord("");
  //   setDefinition("");
  // }

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