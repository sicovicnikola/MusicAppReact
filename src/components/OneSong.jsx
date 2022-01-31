import React from 'react';
import {AiTwotoneStar, AiFillYoutube} from 'react-icons/ai';
import Button from './Button';



const OneSong = ({song, onClick}) => {

  // function add(title){
  //   console.log("add" + title);
  // }

  return <div className='card'>
    <img className='img-left' 
     src={song.img}
     alt='Slika'
    /> 
    <div className='card-body'>
      <h3 className='song-title'> {song.title}</h3>
      <p className='song-singer'> {song.singer}</p>
      <p className='song-duration'>Trajanje: {song.duration}</p>
      {/* <button>
       <AiTwotoneStar />
      </button> */}
      <Button text={"Dodaj u omiljene"}  onClick={onClick}/>
      <hr />
      <a className='song-link' href={song.link}> <AiFillYoutube/>  Link</a>
      
    </div>
    

  </div>;
};

export default OneSong;
