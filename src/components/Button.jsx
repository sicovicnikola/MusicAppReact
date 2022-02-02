import React from 'react';
import {AiTwotoneStar} from 'react-icons/ai';
import {GoTrashcan} from 'react-icons/go';
import {FaTrashAlt} from 'react-icons/fa'; 

function Button({text, onClick, className, inFav}) {
    
  return <div>

    {inFav===1 ? <>
    <button  className={className} type='submit' onClick={onClick}>
      <FaTrashAlt/>   {text}
   </button></> :
   <>
   <button  className={className} type='submit' onClick={onClick}>
      <AiTwotoneStar />   {text}
   </button></>
   }
   
  </div>;
}

export default Button;
