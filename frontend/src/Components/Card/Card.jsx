import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Button } from '@material-ui/core';
import './Card.css'

const Card = ({cards, selectedCollectionId, deleteCard, activeCard, totalCards, frontSide, backSide}) => {

  const [text, setText] = useState(frontSide);

  useEffect(() => {
    setText(frontSide)
  }, [frontSide, backSide])

  function handleClick() {
    setText(prevState => {
      if(prevState === frontSide) {
        return backSide;
      } else {
        return frontSide;
      }
    });
  }

  function handleDelete(selectedCollectionId, id) {
    deleteCard(selectedCollectionId, id);
  }

  return ( 
    <div>
      <div className='flash-card' onClick={() => handleClick()}>
        <span className='count-position'>{activeCard}/{totalCards}</span>
        <span className='span-text'>{text}</span>
      </div>
      <Button onClick={() => handleDelete(selectedCollectionId, cards.id)}><DeleteForeverIcon sx={{ fontSize: 60 }} className='delete-icon' /></Button>
      <Button><EditIcon sx={{ fontSize: 60 }} className='edit-icon'/></Button>
    </div>
   );
}
 
export default Card;