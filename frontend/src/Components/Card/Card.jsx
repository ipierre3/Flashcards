import React, { useState, useEffect } from 'react';
import './Card.css'

const Card = ({frontSide, backSide}) => {

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
      <span className='span-text'>{text}</span>
    </div>
   );
}
 
export default Card;