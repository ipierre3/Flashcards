import React, { useState } from 'react';

const Card = (props) => {
  const [word, setWord] = useState('');
  const [definition, setDefinition] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    let newCard = {
        word: word,
        definition: definition,
    };
    props.AddCard(newCard);
}

  return ( 

   );
}
 
export default Card;