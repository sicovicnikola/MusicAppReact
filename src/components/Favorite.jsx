import React from 'react';
import OneSong from './OneSong';
import SongText from './SongText';


const Favorite = ({songs, onClick ,text, addText}) => {
    const title = "Your favorite music"
  return <>
  <h3 className='favorite-title'>{title}</h3>
  <div className='all-songs'>
       
      {songs.map((s) => (
          <OneSong  song={s} key={s.id} inFavorite={1} onClick={onClick} addText={addText}/>
      ))}
     
  </div>;

  <div>
      <SongText text={text}/>
  </div>
  </>
};

export default Favorite;
