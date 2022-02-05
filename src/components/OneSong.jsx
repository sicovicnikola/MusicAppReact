import React from 'react';
import {AiTwotoneStar, AiFillYoutube} from 'react-icons/ai';
import {ImFileText} from 'react-icons/im'
import Button from './Button';



const OneSong = ({song, onClick, inFavorite, addText}) => {

  // function add(title){
  //   console.log("add" + title);
  // }

  return <div className={inFavorite===1 ? 'card-favorite' : 'card'} >
    <img className='img-left' 
     src={song.img}
     alt='Slika'
    /> 
    <div className='card-body'>
      <h3 className='song-title'> {song.title}</h3>
      <p className='song-singer'> {song.singer}</p>
      
      {inFavorite===1 ? <><p className='song-duration'>Trajanje: {song.duration}</p>
      <Button text={"Izbriši iz omiljenih"}  onClick={()=>onClick(song.id)} inFav={1} className={"btn"}/>
      
      <button  type='submit' className='btn-text' onClick={()=>addText(song.id)}>
       <ImFileText/> Učitaj tekst
      </button>
      <hr/>
      <a className='song-link' href={song.link}> <AiFillYoutube/>  Link</a>
      </> :
      <>
      <Button text={"Dodaj u omiljene"}  onClick={()=>onClick(song.id)} inFav={0} className={"btn"}/>
      <hr />
      <a className='song-link' href={song.link}> <AiFillYoutube/>  Link</a></>
      }
      
      
    </div>
    

  </div>;
};

export default OneSong;
