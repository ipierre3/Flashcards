import React, { useState } from 'react';
import './Card.css'

const Card = ({frontSide, backSide}) => {
  const [text, setText] = useState(frontSide);

  function handleClick() {
    setText(question => {
      if(question === frontSide) {
        return backSide;
      } else {
        return frontSide;
      }
    }); 
    }

  return ( 
    <div className='flash-card' onClick={handleClick}>
      {frontSide}
    </div>
   );
}
 
export default Card;