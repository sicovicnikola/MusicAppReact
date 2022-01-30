import React from 'react';
import img1 from './images/brena.png';
import {AiTwotoneStar} from 'react-icons/ai';


const OneSong = () => {
  return <div className='card'>
    <img className='img-left' 
     src={img1}
     alt='Slika'
    /> 
    <div className='card-body'>
      <h3 className='song-title'> Lepa Brena</h3>
      <p className='song-singer'>Hajde da se volimo</p>
      <p>Trajanje: 2:57</p>
      <button>
       <AiTwotoneStar />
      </button>
      <hr />
      <a className='song-link' href="https://www.youtube.com/watch?v=IcgwXSfJ7Bg"> Link</a>
      
    </div>
    

  </div>;
};

export default OneSong;
