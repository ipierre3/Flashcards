import React, { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import './Card.css'

const Card = ({activeCard, totalCards, frontSide, backSide}) => {

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

  return ( 
    <div className='flash-card' onClick={() => handleClick()}>
      <DeleteForeverIcon className='delete-icon' /> <EditIcon className='edit-icon'/>
      <span className='count-position'>{activeCard}/{totalCards}</span>
      <span className='span-text'>{text}</span>
    </div>
   );
}
 
export default Card;