import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai'

function Button({text, onClick, className, inFavorite}) {
    
  return <div>
   <button  className={className} type='submit' onClick={()=>onClick(text)}>
      <AiTwotoneStar />   {text}
   </button>
  </div>;
}

export default Button;
